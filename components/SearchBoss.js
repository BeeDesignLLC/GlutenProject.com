// @flow
import * as React from 'react'
import Router from 'next/router'
import debounce from 'debounce-fn'
import isPresent from 'is-present'
import {urlForQuery} from '../utils/misc'
import {Configure} from 'react-instantsearch/dom'
import InstantSearch from './InstantSearch'

type Props = {
  children?: React.Node,
  q?: string,
  initialSearchState: Object,
  initialResultsState: Object,
}
type State = {
  searchState: Object,
  production: boolean,
}

const debouncedRouterReplace = debounce(Router.replace, {wait: 700})
const debouncedTrackSearch = debounce(
  query => {
    window.gtag && window.gtag('event', 'search', {search_term: query})
  },
  {wait: 700}
)

class SearchBoss extends React.Component<Props, State> {
  state = {
    searchState: this.props.initialSearchState || {query: this.props.q || ''},
    production: true,
  }

  componentDidMount() {
    if (!isPresent(this.state.searchState.query) && Router.pathname === '/search') {
      const searchInput = window.document.querySelector('#global-product-search')
      if (searchInput) searchInput.focus()
    }

    if (window.location.host !== 'glutenproject.com') {
      this.setState({production: false})
    }
  }

  onSearchStateChange = (searchState: Object) => {
    const newQuery = isPresent(searchState.query) ? searchState.query.trim() : ''

    if (!this.state.searchState.query && newQuery) {
      // Starting search
      // console.log('NEW_SEARCH')
      debouncedRouterReplace.cancel()
      Router.replace(
        {pathname: '/search', query: {...Router.query, q: newQuery}},
        urlForQuery(newQuery),
        {
          shallow: true,
        }
      )
    } else if (Router.query.ssr && this.state.searchState.query !== newQuery) {
      // Starting search from SSR page
      // console.log('NEW_SEARCH_FROM_SSR')

      // Remove ssr from url query
      //eslint-disable-next-line no-unused-vars
      const {ssr, ...urlQuery} = Router.query
      debouncedRouterReplace.cancel()
      Router.replace(
        {pathname: '/search', query: {...urlQuery, q: newQuery}},
        urlForQuery(newQuery),
        {
          shallow: true,
        }
      )
    } else if (this.state.searchState.query && !newQuery) {
      // Ending search
      // console.log('END_SEARCH')
      debouncedRouterReplace.cancel()
      Router.push('/search', '/search', {
        shallow: true,
      })
    } else if (
      isPresent(this.state.searchState.query) &&
      this.state.searchState.query !== newQuery
    ) {
      // Changing search
      // console.log('CHANGE_SEARCH')
      debouncedRouterReplace(
        {pathname: '/search', query: {...Router.query, q: newQuery}},
        urlForQuery(newQuery),
        {
          shallow: true,
        }
      )
    }

    if (this.state.production && newQuery) {
      debouncedTrackSearch(newQuery)
    }

    this.setState({searchState})
  }

  render() {
    return (
      <InstantSearch
        appId="C6AKE3UEC4"
        apiKey="d1a5323f6c1f9c309d0203d37bf61e5d"
        indexName="products"
        resultsState={this.props.initialResultsState}
        onSearchStateChange={this.onSearchStateChange}
        searchState={this.state.searchState}
        searchParameters={{filters: 'brandIsHidden:false AND isHidden:false'}}
      >
        <Configure hitsPerPage={50} analytics={this.state.production} />
        {this.props.children}
      </InstantSearch>
    )
  }
}

export default SearchBoss

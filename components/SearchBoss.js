// @flow
import * as React from 'react'
import Router from 'next/router'
import {InstantSearch, Configure} from 'react-instantsearch/dom'
import debounce from 'debounce-fn'
import {urlForQuery} from '../utils/misc'

type Props = {
  children?: React.Node,
  q?: string,
}
type State = {
  searchState: Object,
  production: boolean,
}

const debouncedRouterReplace = debounce(Router.replace, {wait: 700})

class SearchBoss extends React.Component<Props, State> {
  state = {
    searchState: {query: this.props.q || ''},
    production: false,
  }

  componentDidMount() {
    this.setState({
      searchState: {query: Router.query.q || ''},
    })

    if (Router.pathname === '/search') {
      window.document.querySelector('#searchInput').focus()
    }

    if (window.location.host === 'glutenproject.com') {
      this.setState({production: true})
    }

    Router.onRouteChangeComplete = () => {
      if (
        Router.asPath.startsWith('/search') ||
        Router.asPath.startsWith('/certified-gluten-free')
      ) {
        if (this.state.searchState.query != Router.query.q) {
          this.setState(state => ({
            searchState: {
              ...state.searchState,
              query: Router.query.q || '',
            },
          }))
        }
      }
    }
  }

  onSearchStateChange = (searchState: Object) => {
    if (!this.state.searchState.query && searchState.query) {
      // Starting search
      debouncedRouterReplace.cancel()
      Router.replace(`/search?q=${searchState.query}`, urlForQuery(searchState.query), {
        shallow: true,
      })
    } else if (Router.query.ssr && this.state.searchState.query && searchState.query) {
      // Starting search from SSR page
      debouncedRouterReplace.cancel()
      Router.push(`/search?q=${searchState.query}`, urlForQuery(searchState.query), {
        shallow: true,
      })
    } else if (this.state.searchState.query && !searchState.query) {
      // Ending search
      debouncedRouterReplace.cancel()
      Router.push('/search', '/search', {
        shallow: true,
      })
    } else {
      // Changing search
      debouncedRouterReplace(
        `/search?q=${searchState.query}`,
        urlForQuery(searchState.query),
        {shallow: true}
      )
    }

    this.setState({searchState})
  }

  render() {
    return (
      <InstantSearch
        appId="C6AKE3UEC4"
        apiKey="d1a5323f6c1f9c309d0203d37bf61e5d"
        indexName="products"
        onSearchStateChange={this.onSearchStateChange}
        searchState={this.state.searchState}
      >
        <Configure hitsPerPage={40} analytics={this.state.production} />
        {this.props.children}
      </InstantSearch>
    )
  }
}

export default SearchBoss

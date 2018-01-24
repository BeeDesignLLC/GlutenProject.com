// @flow
import * as React from 'react'
import Router from 'next/router'
import {InstantSearch, Configure} from 'react-instantsearch/dom'
import debounce from 'p-debounce'

type Props = {
  children?: React.Node,
  ssrSearchQuery?: string,
}
type State = {
  searchState: Object,
  production: boolean,
}

const debouncedRouterPush = debounce(Router.push, 500)
// const debouncedRouterReplace = debounce(Router.replace, 500)

class SearchBoss extends React.Component<Props, State> {
  state = {
    searchState: {query: this.props.ssrSearchQuery || ''},
    production: false,
  }

  componentDidMount() {
    console.log('Boss mounted with query:', Router.query.q)
    this.setState({
      searchState: {query: Router.query.q},
    })

    if (Router.pathname === '/search') {
      window.document.querySelector('#searchInput').focus()
    }

    if (window.location.host === 'glutenproject.com') {
      this.setState({production: true})
    }
  }

  onSearchStateChange = (searchState: Object) => {
    if (!this.state.searchState.query && searchState.query) {
      // Starting search
      Router.push({
        pathname: '/search',
        query: {q: searchState.query},
      })
      console.log('Starting search')
    } else if (this.state.searchState.query && !searchState.query) {
      // Ending search
      Router.push('/')
      console.log('Ending search')
    } else {
      // Changing search
      console.log('Changing search')
    }

    this.setState({searchState})
    // this.setState({searchState}, this.updateUrl)
  }

  updateUrl = () => {
    let nextRoute
    const {query} = this.state.searchState

    if (query) {
      nextRoute = `/certified-gluten-free-${query
        .toLowerCase()
        .split(' ')
        .join('-')}`

      if (this.state.production) {
        window.gtag && window.gtag('event', 'search', {search_term: query})
        window.Intercom && window.Intercom('trackEvent', 'searched')
      }
    } else {
      nextRoute = '/'
    }

    // if (this.props.ssrSearchQuery || (Router.pathname == '/' && !query)) {
    //   //eslint-disable-next-line
    //   console.log('updating standard url', query, nextRoute)
    //
    //   // Previous state was SSR OR query is now empty. Need to pushState
    //   Router.push('/', nextRoute)
    // } else if (query) {
    //   //eslint-disable-next-line
    //   console.log('updating query url', query, nextRoute)
    //
    //   // Previous state was client side search change. replaceState to not fill up browser history
    //   // debouncedRouterReplace('/', nextRoute, {shallow: true})
    //   debouncedRouterPush('/', nextRoute)
    // }
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

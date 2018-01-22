// @flow
import * as React from 'react'
import Router from 'next/router'
import pathMatch from 'path-match'
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
const route = pathMatch()
const match = route('/certified-gluten-free-:searchQuery')

class SearchBoss extends React.Component<Props, State> {
  state = {
    searchState: {query: this.props.ssrSearchQuery || ''},
    production: false,
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      const params = match(url)
      const urlQuery = params.searchQuery || ''
      const inputQuery = this.state.searchState.query

      if (urlQuery !== inputQuery) {
        //eslint-disable-next-line
        console.log('setting query from URL')
        this.setState(({searchState}) => ({
          searchState: {
            ...searchState,
            query: urlQuery.split('-').join(' '),
          },
        }))
      }
    }

    if (window.location.host === 'glutenproject.com') {
      this.setState({production: true})
    }
  }

  onSearchStateChange = (searchState: Object) => {
    this.setState({searchState}, this.updateUrl)
  }

  updateUrl = () => {
    let nextRoute
    const {query} = this.state.searchState

    if (query) {
      nextRoute = `/certified-gluten-free-${query
        .toLowerCase()
        .split(' ')
        .join('-')}`
    } else {
      nextRoute = '/'
    }
    //eslint-disable-next-line
    console.log('updating url', query, nextRoute)

    if (this.props.ssrSearchQuery || !query) {
      // Previous state was SSR OR query is now empty. Need to pushState
      Router.push('/', nextRoute)
    } else {
      // Previous state was client side search change. replaceState to not fill up browser history
      // debouncedRouterReplace('/', nextRoute, {shallow: true})
      debouncedRouterPush('/', nextRoute)
    }
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

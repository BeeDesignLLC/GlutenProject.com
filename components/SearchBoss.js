// @flow
import * as React from 'react'
import {InstantSearch, Configure} from 'react-instantsearch/dom'

type Props = {
  children?: React.Node,
}
type State = {
  searchState: Object,
}

class SearchBoss extends React.Component<Props, State> {
  state = {
    searchState: {query: ''},
  }

  onSearchStateChange = (searchState: Object) => {
    // clearTimeout(this.debouncedSetState);
    // this.debouncedSetState = setTimeout(() => {
    //   const href = searchStateToUrl(searchState);
    //   Router.push(href, href, {
    //     shallow: true,
    //   });
    // }, updateAfter);
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
        <Configure hitsPerPage={40} />
        {this.props.children}
      </InstantSearch>
    )
  }
}

export default SearchBoss

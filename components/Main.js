// @flow
import * as React from 'react'
import {withRouter} from 'next/router'
import {connectStateResults, connectSearchBox} from 'react-instantsearch/connectors'
import Home from '../components/Home'
import SearchResults from '../components/SearchResults'

type Props = {
  router: Object,
  searchState: Object,
  searchResults: Object,
  currentRefinement: string,
  refine: any => any,
}

class Main extends React.Component<Props> {
  render() {
    const {currentRefinement} = this.props

    return currentRefinement ? <SearchResults /> : <Home />
  }
}

export default withRouter(connectSearchBox(connectStateResults(Main)))

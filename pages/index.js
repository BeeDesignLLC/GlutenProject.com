// @flow
import * as React from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import SearchResults from '../components/SearchResults'
import {connectStateResults} from 'react-instantsearch/connectors'

type Props = {
  searchState: Object,
  searchResults: Object,
  error: string,
  searching: boolean,
}

const Content = connectStateResults(({searchState}: Props) => (
  <React.Fragment>
    <Home IF={!searchState.query} area="main" />
    <SearchResults IF={searchState.query} area="results" />
  </React.Fragment>
))

class Index extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <Content />
      </Layout>
    )
  }
}

export default Index

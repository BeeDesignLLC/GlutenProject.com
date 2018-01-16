// @flow
import * as React from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import SearchResults from '../components/SearchResults'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <Home mb={4} />
        <SearchResults />
      </Layout>
    )
  }
}

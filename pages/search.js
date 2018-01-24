// @flow
import * as React from 'react'
import App from '../components/App'
import SearchResults from '../components/SearchResults'

type Props = {}

class Search extends React.Component<Props> {
  getInitialProps() {}

  render() {
    return (
      <App>
        <SearchResults />
      </App>
    )
  }
}

export default Search

// @flow
import * as React from 'react'
import App from '../components/App'
import SearchResults from '../components/SearchResults'
import RouterProvider from '../components/RouterProvider'
import {findResultsState} from '../components/InstantSearch'

const routerContext = {
  query: {},
  pathname: '',
}

const AppForSSR = props => (
  <RouterProvider router={routerContext}>
    <App {...props} />
  </RouterProvider>
)

type Props = {
  initialSearchState: Object,
  initialResultsState: Object,
}

class Search extends React.Component<Props> {
  static async getInitialProps({query}: Object) {
    const initialSearchState = {query: query.q}
    const initialResultsState = await findResultsState(AppForSSR, {initialSearchState})
    return {initialResultsState, initialSearchState}
  }

  render() {
    return (
      <App
        initialSearchState={this.props.initialSearchState}
        initialResultsState={this.props.initialResultsState}
      >
        <SearchResults />
      </App>
    )
  }
}

export default Search

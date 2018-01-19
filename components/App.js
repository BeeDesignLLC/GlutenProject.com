// @flow
import * as React from 'react'
import {withRouter} from 'next/router'
import {ThemeProvider} from 'styled-components'
import SearchBoss from './SearchBoss'
import Page from './Page'
import theme from '../theme'

type Props = {
  router: Object,
}

class App extends React.Component<Props> {
  render() {
    const {router, ...props} = this.props

    return (
      <ThemeProvider theme={theme}>
        <SearchBoss ssrSearchQuery={router.query.ssrSearchQuery}>
          <Page {...props} />
        </SearchBoss>
      </ThemeProvider>
    )
  }
}

export default withRouter(App)

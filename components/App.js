// @flow
import React from 'react'
import {withRouter} from 'next/router'
import {ThemeProvider} from 'styled-components'
import SearchBoss from './SearchBoss'
import Layout from './Layout'
import theme from '../theme'

type Props = {
  router: Object,
  initialSearchState: Object,
  initialResultsState: Object,
}

//$FlowFixMe
// class App extends React.unstable_AsyncMode<Props> {
class App extends React.Component<Props> {
  componentDidMount() {
    this.prefetchResources()

    if (window.Intercom) {
      window.Intercom('boot', {
        app_id: 's97lyn5h',
        horizontal_padding: 25,
        vertical_padding: 25,
      })
    }

    this.props.router.onRouteChangeComplete = () => {
      if (window.location.host === 'glutenproject.com') {
        window.Intercom && window.Intercom('update')
        window.gtag && window.gtag('event', 'page_view')
      }
    }
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (window.Raven) {
      window.Raven.captureException(error, {extra: errorInfo})
    }
  }

  prefetchResources = async () => {
    setTimeout(() => {
      this.props.router.prefetch('/search')
    }, 0)

    setTimeout(() => {
      this.props.router.prefetch('/')
      this.props.router.prefetch('/product')
      this.props.router.prefetch('/gluten-free-meal-delivery')
      this.props.router.prefetch('/who')
    }, 1500)
  }

  render() {
    const {router, ...props} = this.props
    return (
      <ThemeProvider theme={theme}>
        <SearchBoss
          q={router && router.query.q}
          initialSearchState={this.props.initialSearchState}
          initialResultsState={this.props.initialResultsState}
        >
          <Layout {...props} />
        </SearchBoss>
      </ThemeProvider>
    )
  }
}

export default withRouter(App)

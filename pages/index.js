// @flow
import * as React from 'react'
import Head from 'next/head'
import App from '../components/App'
import Home from '../components/Home'

type Props = {}
class Index extends React.Component<Props> {
  render() {
    return (
      <App title="Find All Certified Gluten Free Products | The Gluten Project">
        <Head>
          <link rel="canonical" href="https://glutenproject.com" />
        </Head>
        <Home />
      </App>
    )
  }
}

export default Index

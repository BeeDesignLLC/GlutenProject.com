// @flow
import React from 'react'
import Head from 'next/head'
import App from '../components/App'
import Home from '../components/Home'

type Props = {}
class Index extends React.Component<Props> {
  render() {
    return (
      <App title="The Gluten Project - Find All Certified Gluten Free Products">
        <Head>
          <link rel="canonical" href="https://glutenproject.com" />
        </Head>
        <Home />
      </App>
    )
  }
}

export default Index

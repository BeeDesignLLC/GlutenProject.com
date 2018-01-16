// @flow
import * as React from 'react'

import Layout from '../components/Layout'
import Home from '../components/Home'

type Props = {
  userAgent: string,
}

export default class extends React.Component<Props> {
  static async getInitialProps({req}: {req: any}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {userAgent}
  }

  render() {
    return (
      <Layout>
        <Home area="main" />
      </Layout>
    )
  }
}

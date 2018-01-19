// @flow
import * as React from 'react'
import App from '../components/App'
import Main from '../components/Main'

type Props = {}

class Index extends React.Component<Props> {
  render() {
    return (
      <App>
        <Main />
      </App>
    )
  }
}

export default Index

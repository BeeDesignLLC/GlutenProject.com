// @flow
import * as React from 'react'
import App from '../components/App'
import Home from '../components/Home'

type Props = {}
class Index extends React.Component<Props> {
  render() {
    return (
      <App title="Find All Certified Gluten Free Products | The Gluten Project">
        <Home />
      </App>
    )
  }
}

export default Index

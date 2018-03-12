// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import LargeText from '../components/LargeText'
import A from '../components/A'
import Image from '../components/Image'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App title="Who's Behind The Gluten Project">
        <Box area="main">
          <h1>Product page</h1>
        </Box>
      </App>
    )
  }
}

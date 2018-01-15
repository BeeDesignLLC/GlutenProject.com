// @flow
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

type Props = {
  userAgent: string,
}
type State = {}

export default class extends React.Component<Props, State> {
  static async getInitialProps({req}: {req: any}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {userAgent}
  }

  render() {
    return (
      <div>
        <Title>Hello World {this.props.userAgent}</Title>
      </div>
    )
  }
}

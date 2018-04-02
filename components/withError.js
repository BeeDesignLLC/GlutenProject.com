//@flow
import * as React from 'react'
import PropTypes from 'prop-types'
import ErrorPage from 'next/error'
import isPresent from 'is-present'

type Props = {
  statusCode: number,
}

export default (Component: PropTypes.node) =>
  class extends React.Component<Props> {
    static async getInitialProps(ctx: any) {
      const props = await Component.getInitialProps(ctx)
      if (isPresent(ctx.res)) ctx.res.statusCode = props.statusCode
      return props
    }

    render() {
      const {statusCode} = this.props
      if (statusCode && statusCode !== 200) {
        return <ErrorPage statusCode={statusCode} />
      }
      return <Component {...this.props} />
    }
  }

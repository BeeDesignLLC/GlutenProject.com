//@flow
import NextError from 'next/error'
import raven from '../lib/raven'

class CustomError extends NextError {
  static getInitialProps = async (context: any) => {
    if (context.err && context.req) {
      // Error on server during SSR
      raven.captureException(context.err, {req: context.req})
    } else if (context.err instanceof Error) {
      // Error on client
      raven.captureException(context.err)
    }
    return await NextError.getInitialProps(context)
  }
}

export default CustomError

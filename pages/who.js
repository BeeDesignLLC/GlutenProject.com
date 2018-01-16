// @flow
import * as React from 'react'
import Layout from '../components/Layout'
import LargeText from '../components/LargeText'
import Link from '../components/Link'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <LargeText>
          Hi there! We are Brandon and Evelyn Bayer, a young couple currently living in
          Dayton, Ohio. Evelyn has been eating gluten free since 2014 when she realized
          gluten was hurting her ankle.
        </LargeText>

        <LargeText>
          Brandon is an entrepreneur, designer, and developer. He’s passionate about
          business and aviation. Follow him on Twitter{' '}
          <Link href="https://twitter.com/beedesignllc">@beedesignllc</Link>.
        </LargeText>

        <LargeText>
          Evelyn is self-taught fashion designer and seamstress. She’s passionate about
          sewing and sustainability. Follow her on Instagram{' '}
          <Link href="https://www.instagram.com/sew.petite/">@sew.petite</Link>.
        </LargeText>
      </Layout>
    )
  }
}

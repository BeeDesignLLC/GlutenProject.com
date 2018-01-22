// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import HugeHeading from '../components/HugeHeading'
import LargeText from '../components/LargeText'
import Link from '../components/Link'
import Image from '../components/Image'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App title="Who's Behind The Gluten Project">
        <HugeHeading>Who</HugeHeading>

        <Box area="main" style={{overflowY: 'auto'}}>
          <LargeText>
            <strong>Hi there!</strong> We are Brandon and Evelyn Bayer, a young couple
            living in Dayton, Ohio. Evelyn has been eating gluten free since 2014 when she
            realized gluten was the cause of some of her pain.
          </LargeText>

          <LargeText>
            Brandon is an entrepreneur, designer, developer, and independent consultant.
            He’s passionate about business and aviation. Follow him on Twitter{' '}
            <Link href="https://twitter.com/beedesignllc">@beedesignllc</Link>.
          </LargeText>

          <LargeText>
            Evelyn is self-taught seamstress and fashion designer. She’s passionate about
            sewing, healthy eating, and entrepreneurship. Follow her on Instagram{' '}
            <Link href="https://www.instagram.com/sew.petite/">@sew.petite</Link>.
          </LargeText>

          <Box p={6} alignItems="center">
            <Image src="/static/b-and-e.jpg" alt="Brandon and Evelyn standing together" />
          </Box>
        </Box>
      </App>
    )
  }
}

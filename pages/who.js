// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import HugeHeading from '../components/HugeHeading'
import LargeText from '../components/LargeText'
import Anchor from '../components/Anchor'
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
            living in Dayton, Ohio.
          </LargeText>
          <LargeText>
            Evelyn has been eating gluten free since 2014 when she realized gluten was the
            cause of some of her pain. She&rsquo;s since had severe reactions to tiny
            amounts of gluten and avoids it like the plague! Doctors haven&rsquo;t given
            an offical diagnosis of Celiac disease because she can&rsquo;t eat gluten for
            the test, but they believe she does have it.
          </LargeText>

          <LargeText>
            Brandon is an entrepreneur, designer, developer, and independent consultant.
            He’s passionate about business and aviation. Follow him on Twitter{' '}
            <Anchor href="https://twitter.com/beedesignllc" target="_blank">
              @beedesignllc
            </Anchor>.
          </LargeText>

          <LargeText>
            Evelyn is Brandon’s partner in adventure! She is a self-taught seamstress
            crazy about sewing and fashion design and is passionate about living
            holistically. Through her own health journey, she has done extensive research
            on products and brands and loves to share that information to make the
            allergen world easier for others to navigate. Follow her on Instagram{' '}
            <Anchor href="https://www.instagram.com/sew.petite/" target="_blank">
              @sew.petite
            </Anchor>.
          </LargeText>

          <Box p={6} alignItems="center">
            <Image src="/static/b-and-e.jpg" alt="Brandon and Evelyn standing together" />
          </Box>
        </Box>
      </App>
    )
  }
}

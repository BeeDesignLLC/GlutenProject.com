// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import Heading from '../components/Heading'
import LargeText from '../components/LargeText'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App title="The Gluten Project Affiliate Disclosure">
        <Box area="main">
          <Heading is="h1" fontSize={6} fontStyle="italic" color="black">
            Affiliate Disclosure
          </Heading>

          <LargeText>
            We are a participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for us to earn fees
            by linking to Amazon.com and affiliated sites.
          </LargeText>
          <LargeText>
            We are also affiliates for Walmart, Thrive Market, LuckyVitamin, iHerb, and
            others.
          </LargeText>
          <Heading is="h3" fontSize={4} mt={5}>
            Questions
          </Heading>
          <LargeText>
            If you have question about our affiliate relationships, please contact us at
            hi@glutenproject.com
          </LargeText>
        </Box>
      </App>
    )
  }
}

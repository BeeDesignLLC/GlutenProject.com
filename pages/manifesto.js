// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import HugeHeading from '../components/HugeHeading'
import Heading from '../components/Heading'
import LargeText from '../components/LargeText'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App
        title="The Gluten Project Manifesto"
        description="We exist to: Fight for the millions living with gluten disorders and other food allergies; Innovate on the experience of finding and buying allergy-safe products; Build a strong, supportive community of people who care."
      >
        <HugeHeading>Manifesto</HugeHeading>

        <Box area="main">
          <Heading is="h2" fontSize={[4, 3]} fontStyle="italic" color="black">
            We Believe:
          </Heading>
          <LargeText is="ul">
            <li>Life is loving, helping, and befriending others.</li>
            <li>Life should be lived slowly, intentionally, and enthusiastically.</li>
            <li>Lasting impact comes from integrity, honesty, and transparency.</li>
          </LargeText>

          <Heading is="h2" fontSize={[4, 3]} fontStyle="italic" color="black" mt={5}>
            We&apos;re Here To:
          </Heading>
          <LargeText is="ul">
            <li>
              Fight for the millions living with gluten disorders and other food
              allergies.
            </li>
            <li>
              Innovate on the experience of finding and buying allergy-safe products.
            </li>
            <li>Build a strong, supportive community of people who care.</li>
          </LargeText>

          <Heading is="h2" fontSize={[4, 3]} fontStyle="italic" color="black" mt={5}>
            How You Can Help
          </Heading>
          <LargeText>
            First, tell everyone you know with a gluten disorder about this site. The more
            popular the site becomes, the more time and money we can put into it!
          </LargeText>
          <LargeText>
            Second, use the affiliate links on the site and that we send you. These links
            are the only way we get compensated for the time and money invested in the
            site.
          </LargeText>
        </Box>
      </App>
    )
  }
}

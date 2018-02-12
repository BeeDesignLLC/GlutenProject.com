// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import HugeHeading from '../components/HugeHeading'
import ArticleHeading from '../components/ArticleHeading'
import LargeText from '../components/LargeText'
import LargeTextList from '../components/LargeTextList'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App title="Manifesto of The Gluten Project">
        <HugeHeading>Manifesto</HugeHeading>

        <Box area="main">
          <ArticleHeading>We Believe:</ArticleHeading>
          <LargeTextList>
            <li>Life is loving, helping, and befriending others.</li>
            <li>Life should be lived slowly, intentionally, and enthusiastically.</li>
            <li>Lasting impact comes from integrity, honesty, and transparency.</li>
          </LargeTextList>

          <ArticleHeading mt={5}>We&apos;re Here To:</ArticleHeading>
          <LargeTextList>
            <li>
              Fight for the millions living with gluten disorders and other food
              allergies.
            </li>
            <li>
              Innovate on the experience of finding and buying allergy-safe products.
            </li>
            <li>Build a strong, supportive community of people who care.</li>
          </LargeTextList>

          <ArticleHeading mt={6}>How You Can Help</ArticleHeading>
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

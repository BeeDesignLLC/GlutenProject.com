// @flow
import * as React from 'react'
import App from '../components/App'
import Box from '../components/Box'
import ArticleHeading from '../components/ArticleHeading'
import LargeTextList from '../components/LargeTextList'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    return (
      <App title="Manifesto of The Gluten Project">
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
        </Box>
      </App>
    )
  }
}

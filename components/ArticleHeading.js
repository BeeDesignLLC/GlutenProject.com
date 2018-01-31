// @flow
import {theme} from 'styled-system'
import Heading from './Heading'
import {withDynamicTag} from './DynamicTag'

const ArticleHeading = Heading.withComponent('h2').extend`
  color: black;
  font-size: ${theme('fontSizes.4')};
  font-style: italic;
  text-align: center;

  @media (min-width: ${theme('breakpoints.0')}) {
    color: ${theme('grays.1')};
    font-size: ${theme('fontSizes.3')};
    text-align: left;
  }
`
ArticleHeading.displayName = 'ArticleHeading'
export default withDynamicTag(ArticleHeading)

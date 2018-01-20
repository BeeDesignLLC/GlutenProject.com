// @flow
import Heading from './Heading'
import {withDynamicTag} from './DynamicTag'

const ArticleHeading = Heading.withComponent('h2').extend.attrs({
  fontSize: props => props.fontSize || 3,
  color: props => props.color || 'grays.1',
})`
  font-style: italic;
`
ArticleHeading.displayName = 'ArticleHeading'
export default withDynamicTag(ArticleHeading)

// @flow
import Heading from './Heading'
import {withDynamicTag} from './DynamicTag'

const PageHeading = Heading.withComponent('h2').extend.attrs({
  fontSize: props => props.fontSize || 4,
})`
  font-style: italic;
  margin-bottom: -7px;
  text-align: right;
`
PageHeading.displayName = 'PageHeading'
export default withDynamicTag(PageHeading)

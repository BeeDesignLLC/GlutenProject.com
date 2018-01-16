// @flow
import Heading from './Heading'
import {withDynamicTag} from './DynamicTag'

const PageHeading = Heading.extend.attrs({
  fontSize: props => props.fontSize || 4,
  align: props => props.align || 'right',
})`
  font-style: italic;
`
PageHeading.displayName = 'PageHeading'
export default withDynamicTag(PageHeading)

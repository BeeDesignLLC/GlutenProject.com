// @flow
import Heading from './Heading'
import {withDynamicTag} from './DynamicTag'

const SectionHeading = Heading.extend.attrs({
  fontSize: props => props.fontSize || 2,
  color: props => props.color || 'grays.2',
})`
`
SectionHeading.displayName = 'SectionHeading'
export default withDynamicTag(SectionHeading)

// @flow
import {theme} from 'styled-system'
import Heading from './Heading'
import {withDynamicTag} from './DynamicTag'

const PageHeading = Heading.withComponent('h3').extend.attrs({
  fontSize: props => props.fontSize || 4,
})`
  font-style: italic;
  margin-bottom: -5px;
  text-align: center;

  @media (min-width: ${theme('breakpoints.0')}) {
		text-align: right;
  }
`
PageHeading.displayName = 'PageHeading'
export default withDynamicTag(PageHeading)

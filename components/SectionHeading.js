// @flow
import {theme} from 'styled-system'
import Heading from './Heading'
import {withDynamicTag} from './DynamicTag'

const SectionHeading = Heading.extend`
  color: ${theme('colors.grays.1')};
  font-size: ${theme('fontSizes.3')};
  ${props => !props.align && 'text-align: center'};

  @media (min-width: ${theme('breakpoints.0')}) {
    font-size: ${theme('fontSizes.2')};
    text-align: ${props => props.align || 'left'};
  }
`
SectionHeading.displayName = 'SectionHeading'
export default withDynamicTag(SectionHeading)

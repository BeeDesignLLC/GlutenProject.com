// @flow
import Heading from './Heading'
import {theme} from 'styled-system'
import {withDynamicTag} from './DynamicTag'

const HugeHeading = Heading.extend`
  color: ${theme('colors.greenLight')};
  font-size: 8vw;
  font-style: italic;
  font-weight: 700;
  line-height: 1.1em;
  opacity: 0.4;
  position: fixed;
  left: 0.2em;
  bottom: 0;
  user-select: none;
  z-index: -1;
`
HugeHeading.displayName = 'HugeHeading'
export default withDynamicTag(HugeHeading)

// @flow
import system from 'system-components'
import theme from '../theme'
import {layout, text} from '../utils/styled'

const HugeHeading = system(
  {
    is: 'h4',
    fontSize: '8vw',
    fontStyle: 'italic',
    fontWeight: 700,
    color: 'greenLight',
  },
  ...text,
  ...layout
).extend`
  line-height: 1.1em;
  opacity: 0.4;
  position: fixed;
  left: 0.2em;
  bottom: 0;
  user-select: none;
  z-index: -1;

  @media (min-width: ${theme.breakpoints[0]}) {
    display: unset;
  }
`

HugeHeading.displayName = 'HugeHeading'
export default HugeHeading

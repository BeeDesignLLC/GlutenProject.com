// @flow
import system from 'system-components'
import {layout, text} from '../utils/styled'

const Heading = system(
  {
    is: 'h4',
    fontSize: [3, 2],
    mb: 3,
    color: 'grays.1',
    fontWeight: 700,
    textAlign: ['center', 'left'],
  },
  ...text,
  ...layout
)

Heading.displayName = 'Heading'
export default Heading

// @flow
import system from 'system-components'
import {layout, text} from '../utils/styled'

const SmallText = system(
  {
    is: 'p',
    fontSize: 0,
    color: 'grays.0',
  },
  ...text,
  ...layout
).extend`
  letter-spacing: 0.08ex;
`

SmallText.displayName = 'SmallText'
export default SmallText

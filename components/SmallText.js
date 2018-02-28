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
)

SmallText.displayName = 'SmallText'
export default SmallText

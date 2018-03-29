// @flow
import system from 'system-components'
import {layout, text} from '../utils/styled'

const SmallText = system(
  {
    is: 'p',
    fontSize: 0,
    color: 'grays.0',
    letterSpacing: '0.08ex',
  },
  ...text,
  ...layout
).extend`

  html:not(.wf-active) & {
    font-size: 12px;
    word-spacing: -1.1px;
    line-height: 1.5;
  }
`

SmallText.displayName = 'SmallText'
export default SmallText

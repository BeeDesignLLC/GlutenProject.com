// @flow
import system from 'system-components'
import theme from '../theme'
import {layout, text} from '../utils/styled'

const SecondaryText = system(
  {
    is: 'p',
    fontSize: 1,
    fontStyle: 'italic',
    color: 'grays.2',
    maxWidth: '30em',
  },
  ...text,
  ...layout
).extend`

  & + & {
    margin-top: ${theme.space[3]};
  }

  html:not(.wf-active) & {
    font-size: 15px;
    letter-spacing: -0.6px;
    word-spacing: -1.1px;
    line-height: 1.5;
  }
`

SecondaryText.displayName = 'SecondaryText'
export default SecondaryText

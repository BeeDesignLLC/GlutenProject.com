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
`

SecondaryText.displayName = 'SecondaryText'
export default SecondaryText

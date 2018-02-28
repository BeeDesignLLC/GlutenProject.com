// @flow
import {css} from 'styled-components'
import system from 'system-components'
import theme from '../theme'
import {layout, text} from '../utils/styled'

const listStyles = () => css`
  padding-left: ${theme.space[4]};
`

const Text = system(
  {
    is: 'p',
    fontSize: 1,
  },
  ...text,
  ...layout
).extend`
  ${props => props.is === 'ul' && listStyles()}

  & + & {
    margin-top: ${theme.space[3]};
  }

  & > li + li {
    margin-top: ${theme.space[2]};
  }
`

Text.displayName = 'Text'
export default Text

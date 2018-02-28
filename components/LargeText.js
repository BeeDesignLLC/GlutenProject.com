// @flow
import system from 'system-components'
import {css} from 'styled-components'
import theme from '../theme'
import {layout, text} from '../utils/styled'

const listStyles = () => css`
  padding-left: ${theme.space[4]};
`

const LargeText = system(
  {
    is: 'p',
    fontSize: 2,
  },
  ...text,
  ...layout
).extend`
  line-height: 3.2ex;
  max-width: 35em;

  ${props => props.is === 'ul' && listStyles()}

  & + & {
    margin-top: ${theme.space[3]};
  }

  & > li + li {
    margin-top: ${theme.space[2]};
  }
`

LargeText.displayName = 'LargeText'
export default LargeText

// @flow
import {css} from 'styled-components'
import system from 'system-components'
import theme from '../theme'
import {layout, text} from '../utils/styled'

const listStyles = () => css`
  list-style-position: inside;

  & > li + li {
    margin-top: ${theme.space[2]};
  }
`

const pStyles = () => css`
  & + & {
    ${props =>
      typeof props.mt === 'undefined' && typeof props.m === 'undefined'
        ? css`
            margin-top: ${theme.space[3]};
          `
        : null};
  }
`

const Text = system(
  {
    is: 'p',
    fontSize: 1,
  },
  ...text,
  ...layout
).extend`
  ${props => props.is === 'p' && pStyles()}
  ${props => props.is === 'ul' && listStyles()}

`

Text.displayName = 'Text'
export default Text

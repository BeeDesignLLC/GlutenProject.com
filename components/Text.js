// @flow
import {css} from 'styled-components'
import system from 'system-components'
import t from '../theme'
import {layout, text} from '../utils/styled'

const listStyles = () => css`
  margin-left: ${t.space[4]};
  padding-left: 0;

  & > li + li {
    margin-top: ${t.space[2]};
  }
`

const pStyles = () => css`
  & + & {
    ${props =>
      typeof props.mt === 'undefined' && typeof props.m === 'undefined'
        ? css`
            margin-top: ${t.space[3]};
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
  ${props => (props.is === 'ul' || props.is === 'ol') && listStyles()}
`

Text.displayName = 'Text'
export default Text

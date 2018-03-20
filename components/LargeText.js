// @flow
import system from 'system-components'
import {css} from 'styled-components'
import t from '../theme'
import {layout, text} from '../utils/styled'

const listStyles = () => css`
  margin-left: ${t.space[4]};
  padding-left: 0;

  & > li + li {
    margin-top: ${t.space[1]};
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

  ${props => props.is === 'p' && pStyles()}
  ${props => (props.is === 'ul' || props.is === 'ol') && listStyles()}
`

LargeText.displayName = 'LargeText'
export default LargeText

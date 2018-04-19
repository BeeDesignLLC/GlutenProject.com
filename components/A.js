// @flow
import * as React from 'react'
import {css} from 'styled-components'
import system from 'system-components'
import {withRouter} from 'next/router'
import theme from '../theme'
import {layout, text} from '../utils/styled'

const menuStyles = () => css`
  letter-spacing: 0.3ex;
  display: flex;
  font-size: ${theme.fontSizes[1]};
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => (props.isActive ? theme.colors.greenDark : theme.colors.grays[2])};

  & > span {
    align-self: flex-end;
    flex: 1;
  }

  & > svg {
    align-self: center;
    margin-right: ${theme.space[3]};
    flex-shrink: 0;
  }

  &:hover {
    color: ${theme.colors.greenDark};
  }

  @media (min-width: ${theme.breakpoints[0]}) {
    font-size: 1.6ex;

    & > svg {
      max-height: 2.6ex;
      margin-right: ${theme.space[2]};
    }
  }

  html:not(.wf-active) & {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.45ex;
  }
`

const buttonStyles = () => css`
  background-color: unset;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;

  & > svg path:not(.container) {
    stroke: currentColor;
  }
`

// -----------------
// MAIN ANCHOR STYLE
// -----------------
const Anchor = system(
  {
    is: 'a',
    blacklist: ['isActive', 'menu'],
  },
  ...text,
  ...layout
).extend`
  fill: currentColor;
  font-family: inherit;

  ${props => props.is === 'button' && buttonStyles}
  ${props => props.menu && menuStyles}
`

type Props = {router: Object, href: string}
const A = ({router, ...props}: Props) => (
  <Anchor isActive={router.pathname === props.href} {...props} />
)

export default withRouter(A)

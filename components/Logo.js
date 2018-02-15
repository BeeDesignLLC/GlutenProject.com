// @flow
import * as React from 'react'
import Router from 'next/router'
import {theme} from 'styled-system'
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  alignSelf,
} from 'styled-system'
import {gridArea, justifySelf} from '../utils/styled'

const LogoHeading = styled.h3.attrs({
  color: props => (props.color !== undefined ? props.color : 'grays.1'),
  f: props => (props.f !== undefined ? props.f : 4),
  pl: props => (props.pl !== undefined ? props.pl : 1),
})`
  font-weight: 900;
  font-style: italic;
  line-height: 2ex;
  border-left: ${theme('colors.green')} ${theme('space.1')} solid;
  cursor: pointer;

  & > span {
    font-weight: 400;
  }

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${justifyContent}
  ${alignSelf}
  ${gridArea}
  ${justifySelf}
`

const Logo = (props: Object) => (
  <LogoHeading onClick={() => Router.push('/')} {...props}>
    <span>the</span>
    <br />Gluten<br />Project
  </LogoHeading>
)

export default Logo

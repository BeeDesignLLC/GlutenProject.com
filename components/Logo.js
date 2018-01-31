// @flow
import * as React from 'react'
import Router from 'next/router'
import {theme} from 'styled-system'
import Heading from './Heading'

const LogoHeading = Heading.withComponent('h3').extend`
  color: ${theme('colors.grays.1')};
  font-size: ${theme('fontSizes.4')};
  font-weight: 900;
  font-style: italic;
  line-height: 2ex;
  border-left: ${theme('colors.green')} ${theme('space.1')} solid;
  padding-left: ${theme('space.1')};
  cursor: pointer;

  & > span {
    font-weight: 400;
  }
`

const Logo = (props: Object) => (
  <LogoHeading onClick={() => Router.push('/')} {...props}>
    <span>the</span>
    <br />Gluten<br />Project
  </LogoHeading>
)

export default Logo

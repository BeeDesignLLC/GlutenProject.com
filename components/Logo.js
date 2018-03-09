// @flow
import * as React from 'react'
import Link from 'next/link'
import {themeGet} from 'styled-system'

import system from 'system-components'
import {layout, text} from '../utils/styled'

const LogoHeading = system(
  {
    is: 'h3',
    fontSize: 4,
    color: 'grays.1',
    fontStyle: 'italic',
    fontWeight: 900,
    textAlign: ['center', 'left'],
    pl: 1,
  },
  ...text,
  ...layout
).extend`
  line-height: 2ex;
  border-left: ${themeGet('colors.green')} ${themeGet('space.1')} solid;
  cursor: pointer;

  & > span {
    font-weight: 400;
  }
`
LogoHeading.displayName = 'LogoHeading'

const Logo = (props: Object) => (
  <Link href="/">
    <LogoHeading textAlign="left" {...props}>
      <span>the</span>
      <br />Gluten<br />Project
    </LogoHeading>
  </Link>
)

export default Logo

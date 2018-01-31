// @flow
import * as React from 'react'
import {withRouter} from 'next/router'
import NextLink from 'next/link'
import Anchor from './Anchor'

type Props = {
  children?: React.Node,
  menu?: boolean,
  href?: any,
  as?: any,
  replace?: boolean,
  router: Object,
}

const Link = ({children, menu, href, as, replace, router, ...props}: Props) => (
  <NextLink prefetch passHref href={href} as={as} replace={replace}>
    <Anchor menu={menu} active={router.pathname === href} {...props}>
      {children}
    </Anchor>
  </NextLink>
)

export default withRouter(Link)

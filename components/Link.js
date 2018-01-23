// @flow
import * as React from 'react'
import NextLink from 'next/link'
import Anchor from './Anchor'

type Props = {
  children?: React.Node,
  menu?: boolean,
  href?: any,
  as?: any,
  replace?: boolean,
}

const Link = ({children, menu, href, as, replace, ...props}: Props) => (
  <NextLink prefetch passHref href={href} as={as} replace={replace}>
    <Anchor menu={menu} {...props}>
      {children}
    </Anchor>
  </NextLink>
)

export default Link

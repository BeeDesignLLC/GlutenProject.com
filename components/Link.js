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
  onClick?: any,
}

const Link = ({children, menu, href, as, replace, onClick, ...props}: Props) => (
  <NextLink prefetch passHref href={href} as={as} replace={replace} onClick={onClick}>
    <Anchor menu={menu} {...props}>
      {children}
    </Anchor>
  </NextLink>
)

export default Link

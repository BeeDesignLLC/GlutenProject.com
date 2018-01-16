// @flow
import * as React from 'react'
import NextLink from 'next/link'
import Anchor from './Anchor'

type Props = {
  children?: React.Node,
  menu?: boolean,
}

const Link = ({children, menu, ...props}: Props) => (
  <NextLink prefetch passHref {...props}>
    <Anchor menu={menu}>{children}</Anchor>
  </NextLink>
)

export default Link

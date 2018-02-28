// @flow
import system from 'system-components'
import {layout} from '../utils/styled'

const Box = system(
  {
    flexDirection: 'column',
  },
  ...layout,
  'bgColor',
  'textAlign'
).extend`
  display: flex;
`

export const Header = Box.withComponent('header')
export const Nav = Box.withComponent('nav')
export const Aside = Box.withComponent('aside').extend`
  width: 100%;
`

Box.displayName = 'Box'
export default Box

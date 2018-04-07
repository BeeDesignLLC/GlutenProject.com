// @flow
import system from 'system-components'
import {layout} from '../utils/styled'

const Box = system(
  {
    flexDirection: 'column',
    blacklist: [
      'justifySelf',
      'alignSelf',
      'flexDirection',
      'flexWrap',
      'justifyContent',
      'alignItems',
      'showBorder',
      'clicked',
    ],
  },
  ...layout,
  'bgColor',
  'textAlign'
).extend`
  display: flex;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
  text-decoration: none;
`

export const Header = Box.withComponent('header')
export const Nav = Box.withComponent('nav')
export const Aside = Box.withComponent('aside').extend`
  width: 100%;
`

Box.displayName = 'Box'
export default Box

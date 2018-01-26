// @flow
import styled from 'styled-components'
import {
  space,
  width,
  color,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
  fontSize,
  cleanElement,
  propTypes,
} from 'styled-system'
import {gridArea, height, justifySelf, numberOrString} from '../utils/styled'

const BoxPropTypes = {
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.color,
  ...propTypes.flex,
  ...propTypes.flexDirection,
  ...propTypes.flexWrap,
  ...propTypes.justifyContent,
  ...propTypes.alignItems,
  ...propTypes.alignSelf,
  ...propTypes.borderRadius,
  ...propTypes.borderColor,
  ...propTypes.borderWidth,
  ...propTypes.boxShadow,
  ...propTypes.fontSize,
  justifySelf: numberOrString,
}
const CleanDiv = cleanElement('div')
CleanDiv.propTypes = BoxPropTypes
const CleanHeader = cleanElement('header')
CleanHeader.propTypes = BoxPropTypes
const CleanNav = cleanElement('nav')
CleanNav.propTypes = BoxPropTypes
const CleanAside = cleanElement('aside')
CleanAside.propTypes = BoxPropTypes

const Box = styled(CleanDiv)`
  display: flex;
  flex-direction: column;

  ${space}
  ${width}
  ${height}
  ${color}
  ${fontSize}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${boxShadow}
  ${gridArea}
  ${justifySelf}
`

export const Header = Box.withComponent(CleanHeader)
export const Nav = Box.withComponent(CleanNav)
export const Aside = Box.withComponent(CleanAside)

export default Box

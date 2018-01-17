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
} from 'styled-system'
import {gridArea} from '../utils/styled'
import {withDynamicTag} from './DynamicTag'

export const RawBox = styled.div.attrs({
  flexDirection: props => props.flexDirection || 'column',
})`
  ${space}
  ${width}
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

  display: flex;
`
export default withDynamicTag(RawBox)

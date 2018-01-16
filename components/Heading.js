// @flow
import styled from 'styled-components'
import {
  theme,
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  alignItems,
  alignSelf,
} from 'styled-system'
import {gridArea} from '../utils/styled'

const Heading = styled.h1.attrs({
  m: props => props.m || 0,
  mb: props => props.mb || 3,
})`
  font-weight: 700;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridArea}


  p + & {
    margin-top: ${theme('space.5')};
  }
`
export default Heading

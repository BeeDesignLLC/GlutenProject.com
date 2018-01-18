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

const Heading = styled.h1`
  font-weight: 700;
  margin: 0 0 ${theme('space.3')};

  p + & {
    margin-top: ${theme('space.5')};
  }

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridArea}
`
export default Heading

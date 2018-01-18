// @flow
import styled from 'styled-components'
import {
  theme,
  space,
  width,
  fontSize,
  color,
  textAlign,
  lineHeight,
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
} from 'styled-system'
import {gridArea} from '../utils/styled'

const Button = styled.button`
  background: ${theme('colors.green')};
  border: none;
  border-radius: 10rem;
  color: white;
  cursor: pointer;
  font-size: ${theme('fontSizes.1')};
  font-weight: normal;
  margin: 0;
  padding: 0.2rem 0.6rem 0.35rem;
  font-feature-settings: "smcp";
  letter-spacing: 0.15ex;

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${lineHeight}
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
`
export default Button

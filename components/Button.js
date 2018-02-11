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
  padding: 0.3rem 1rem 0.5rem;
  font-feature-settings: "smcp";
  letter-spacing: 0.15ex;
  flex-shrink: 0;
  outline: none;
  align-self: flex-start;
  animate: transform box-shadow 0.1s;

  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

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

export const TinyButton = Button.extend`
  font-size: ${theme('fontSizes.0')};
  padding: 0rem 0.5rem 0.1rem;
`
export const TinyButtonA = TinyButton.withComponent('a').extend`
  text-decoration: none;
`

export default Button

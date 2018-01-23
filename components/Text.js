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
  alignSelf,
} from 'styled-system'
import {gridArea, justifySelf} from '../utils/styled'

const Text = styled.p`
  font-size: ${theme('fontSizes.1')};
  font-weight: normal;
  margin: 0;

  & + & {
    margin-top: ${theme('space.3')};
  }

  & > ul {
    margin: 0;
    padding-left: ${theme('space.4')};
  }

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${lineHeight}
  ${gridArea}
  ${justifySelf}
  ${alignSelf}
`
export default Text

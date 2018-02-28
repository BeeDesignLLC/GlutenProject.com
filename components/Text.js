// @flow
import styled from 'styled-components'
import {
  themeGet,
  space,
  width,
  fontSize,
  color,
  textAlign,
  lineHeight,
  alignSelf,
} from 'styled-system'
import {gridArea, justifySelf, position} from '../utils/styled'

const Text = styled.p`
  font-size: ${themeGet('fontSizes.1')};
  font-weight: normal;

  & + & {
    margin-top: ${themeGet('space.3')};
  }

  & > ul {
    margin: 0;
    padding-left: ${themeGet('space.4')};
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
  ${position}
`
export default Text

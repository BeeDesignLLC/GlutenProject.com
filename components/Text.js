// @flow
import styled from 'styled-components'
import {theme, space, width, fontSize, color, textAlign, lineHeight} from 'styled-system'
import {gridArea} from '../utils/styled'

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

  & > span.ais-Highlight {
    display: block;
  }

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${lineHeight}
  ${gridArea}
`
export default Text

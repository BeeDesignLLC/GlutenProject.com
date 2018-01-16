// @flow
import styled from 'styled-components'
import {theme, space, width, fontSize, color, textAlign} from 'styled-system'
import {gridArea} from '../utils/styled'

const Text = styled.p.attrs({
  m: props => props.m || 0,
  fontSize: props => props.fontSize || 1,
})`
  font-weight: normal;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${gridArea}

  & + & {
    margin-top: ${theme('space.3')};
  }

  & > ul {
    margin: 0;
    padding-left: ${theme('space.4')};
  }
`
export default Text

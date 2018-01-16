// @flow
import styled from 'styled-components'
import {space, width, fontSize, color, textAlign} from 'styled-system'

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
`
export default Text

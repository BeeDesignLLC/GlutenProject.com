// @flow
import styled from 'styled-components'
import {space, width, fontSize, color, textAlign} from 'styled-system'

const Heading = styled.h1.attrs({
  m: props => props.m || 0,
})`
  font-weight: 700;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
`
export default Heading

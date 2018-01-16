// @flow
import styled from 'styled-components'
import {space, width, fontSize, color, textAlign} from 'styled-system'

const Anchor = styled.a.attrs({
  m: props => props.m || 0,
  color: 'green',
  fontSize: props => (props.menu ? 0 : props.fontSize),
})`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}

  text-decoration: none;
  text-transform: ${props => (props.menu ? 'uppercase' : 'inherit')};
  letter-spacing: ${props => (props.menu ? '0.2em' : 'inherit')};

  &:hover {
    text-decoration: underline;
  }
`
export default Anchor

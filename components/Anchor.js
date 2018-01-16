// @flow
import styled from 'styled-components'
import {space, width, fontSize, color, textAlign} from 'styled-system'

const Anchor = styled.a.attrs({
  m: props => props.m || 0,
  color: 'green',
})`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}

  text-decoration: none;

  ${props =>
    props.menu &&
    `
    font-feature-settings: "smcp";
    letter-spacing: 0.15ex;
    display: block;
    & + & {
      margin-top: 0.5rem;
    }
  `}

  &:hover {
    text-decoration: underline;
  }
`
export default Anchor

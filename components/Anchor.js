// @flow
import styled from 'styled-components'
import {space, width, fontSize, color, textAlign, theme} from 'styled-system'

const Anchor = styled.a.attrs({
  m: props => (props.m !== undefined ? props.m : 0),
  color: 'green',
})`

  cursor: pointer;
  text-decoration: none;
  font-style: inherit;
  font-size: ${props => (props.menu ? theme('fontSizes.1') : 'inherit')};

  ${props =>
    props.menu &&
    `
    font-feature-settings: "smcp";
    letter-spacing: 0.15ex;
    display: block;
  `}

  &:hover {
    text-decoration: underline;
  }

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
`

export const AnchorButton = Anchor.withComponent('button').extend`
  text-align: unset;
  background-color: unset;
`

export default Anchor

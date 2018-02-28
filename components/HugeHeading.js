// @flow
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  alignSelf,
} from 'styled-system'
import {gridArea, justifySelf} from '../utils/styled'
import {themeGet} from 'styled-system'
import {withDynamicTag} from './DynamicTag'

const HugeHeading = styled.h4.attrs({
  color: props => (props.color !== undefined ? props.color : 'greenLight'),
})`
  display: none;
  font-size: 8vw;
  font-style: italic;
  font-weight: 700;
  line-height: 1.1em;
  opacity: 0.4;
  position: fixed;
  left: 0.2em;
  bottom: 0;
  user-select: none;
  z-index: -1;

  @media (min-width: ${themeGet('breakpoints.0')}) {
    display: unset;
  }

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${justifyContent}
  ${alignSelf}
  ${gridArea}
  ${justifySelf}
`
HugeHeading.displayName = 'HugeHeading'
export default withDynamicTag(HugeHeading)

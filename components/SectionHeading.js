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

const SectionHeading = styled.h4.attrs({
  color: props => (props.color !== undefined ? props.color : 'grays.1'),
  f: props => (props.f !== undefined ? props.f : [3, 2]),
  mb: props => (props.mb !== undefined ? props.mb : 3),
})`
  font-weight: 700;

  ${props => !props.align && 'text-align: center'};

  @media (min-width: ${themeGet('breakpoints.0')}) {
    text-align: ${props => props.align || 'left'};
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

SectionHeading.displayName = 'SectionHeading'
export default withDynamicTag(SectionHeading)

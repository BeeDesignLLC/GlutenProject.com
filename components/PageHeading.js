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

const PageHeading = styled.h3.attrs({
  f: props => (props.f !== undefined ? props.f : 4),
})`
  font-style: italic;
  font-weight: 700;
  margin-bottom: -5px;
  text-align: center;

  @media (min-width: ${themeGet('breakpoints.0')}) {
		text-align: right;
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
PageHeading.displayName = 'PageHeading'
export default withDynamicTag(PageHeading)

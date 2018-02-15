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
import {theme} from 'styled-system'
import {withDynamicTag} from './DynamicTag'

const ArticleHeading = styled.h2.attrs({
  f: props => (props.f !== undefined ? props.f : [4, 3]),
  mb: props => (props.mb !== undefined ? props.mb : 3),
})`
  color: black;
  font-weight: 700;
  font-style: italic;
  text-align: center;

  @media (min-width: ${theme('breakpoints.0')}) {
    color: ${theme('grays.1')};
    text-align: left;
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
ArticleHeading.displayName = 'ArticleHeading'
export default withDynamicTag(ArticleHeading)

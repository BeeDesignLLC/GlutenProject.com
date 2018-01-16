// @flow
import * as React from 'react'
import {connectSearchBox} from 'react-instantsearch/connectors'
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
  justifyContent,
  alignItems,
  alignSelf,
} from 'styled-system'
import {gridArea} from '../utils/styled'

const BaseSearchInput = styled.input.attrs({
  placeholder: 'What can we find for you?',
  // width: props => props.width || '100%',
  fontSize: props => props.fontSize || 1,
  bg: props => props.bg || 'greenLight',
  type: 'text',
})`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${boxShadow}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridArea}

  border: none;
  height: 2rem;
  border-radius: 10rem;
  font-family: prenton, sans-serif;
  font-weight: 500;
  padding: 0 0.8rem;

  &::placeholder {
    color: black;
    font-style: italic;
    opacity: 1;
  }

  &:focus, &:active {
    &::placeholder {
      opacity: 0.5;
    }
  }
`

type Props = {
  currentRefinement: string,
  refine: any => any,
}

const SearchInput = ({currentRefinement, refine, ...props}: Props) => (
  <BaseSearchInput
    value={currentRefinement}
    onChange={e => refine(e.target.value)}
    {...props}
  />
)

export default connectSearchBox(SearchInput)

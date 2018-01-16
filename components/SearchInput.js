// @flow
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

const SearchInput = styled.input.attrs({
  placeholder: 'What can we find for you?',
  // width: props => props.width || '100%',
  fontSize: props => props.fontSize || 1,
  bg: props => props.bg || 'greenLight',
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
export default SearchInput

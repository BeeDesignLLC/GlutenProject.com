// @flow
import styled from 'styled-components'
import {
  space,
  width,
  boxShadow,
  justifyContent,
  alignItems,
  alignSelf,
  flex,
  theme,
} from 'styled-system'
import {gridArea} from '../utils/styled'

const Input = styled.input`
  background-color: ${theme('colors.greenLight')};
  border: 2px solid transparent;
  border-radius: 1.25rem;
  color: black;
  caret-color: currentColor;
  height: 2rem;
  /* Non-standard font size to prevent iOS zoom-on-focus */
  font-size: 16px;
  font-family: prenton, sans-serif;
  font-weight: 500;
  padding: 0 0.7rem;
  -webkit-tap-highlight-color: rgba(0,0,0,0);


  &::placeholder {
    color: black;
    font-style: italic;
    opacity: 0.5;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0.5;
    }
  }

  @media (min-width: ${theme('breakpoints.0')}) {
    font-size: ${theme('fontSizes.1')};

  }

  ${space}
  ${width}
  ${boxShadow}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridArea}
  ${flex}
`

export default Input

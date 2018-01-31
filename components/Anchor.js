// @flow
import styled, {css} from 'styled-components'
import {space, width, fontSize, color, textAlign, theme} from 'styled-system'

const menuStyles = () => css`
  letter-spacing: 0.3ex;
  display: flex;
  font-size: ${theme('fontSizes.1')};
  font-weight: 500;
  text-transform: uppercase;

  & > span {
    align-self: flex-end;
  }

  & > svg {
    align-self: center;
    margin-right: ${theme('space.3')};
  }

  &:hover {
    color: ${theme('colors.greenDark')};
    text-decoration: none;
  }

  ${props =>
    props.active
      ? null
      : css`
          color: ${theme('colors.grays.2')};
        `};

  @media (min-width: ${theme('breakpoints.0')}) {
    font-size: 1.6ex;

    & > svg {
      max-height: 2.6ex;
      margin-right: ${theme('space.2')};
    }
  }
`

const Anchor = styled.a`
  color: ${theme('colors.green')};
  cursor: pointer;
  text-decoration: none;
  font-style: inherit;
  font-size: inherit;
  fill: currentColor;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.menu && menuStyles}

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
`

export const AnchorButton = Anchor.withComponent('button').extend`
  text-align: unset;
  background-color: unset;
  flex-shrink: 0;

  & > svg path:not(.container) {
		stroke: currentColor;
	}
`

export default Anchor

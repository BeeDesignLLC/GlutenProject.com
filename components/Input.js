// @flow
import system from 'system-components'
import t from '../theme'
import {layout, text} from '../utils/styled'

const Input = system(
  {
    is: 'input',
    color: 'black',
    bg: 'greenLight',
  },
  ...layout,
  ...text
).extend`
  border: 2px solid transparent;
  border-radius: 1.25rem;
  caret-color: currentColor;
  height: 2rem;
  /* Non-standard font size to prevent iOS zoom-on-focus */
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  padding: 3px 12px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  html:not(.wf-active) & {
    font-weight: 700;
  }

  &::placeholder {
    color: black;
    font-style: italic;
    opacity: 0.5;
  }

  html:not(.wf-active) &::placeholder {
    font-weight: 700;
    letter-spacing: -1px;
    word-spacing: -1px;
  }

  &:focus {
    outline: none;
    border: 3px solid ${t.colors.greenDark};
    padding: 0 11px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  @media (min-width: ${t.breakpoints[0]}) {
    font-size: ${t.fontSizes[1]};
  }
`

export default Input

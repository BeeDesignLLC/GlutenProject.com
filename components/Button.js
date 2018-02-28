// @flow
import system from 'system-components'
import theme from '../theme'
import {layout, text} from '../utils/styled'

const Button = system(
  {
    is: 'button',
    color: 'white',
    bg: 'green',
    fontSize: 1,
    fontWeight: 'normal',
    alignSelf: 'flex-start',
  },
  ...layout,
  ...text
).extend`
  animate: transform box-shadow 0.1s;
  border: none;
  border-radius: 10rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  font-feature-settings: "smcp";
  flex-shrink: 0;
  letter-spacing: 0.15ex;
  outline: none;
  padding: ${props => (props.tiny ? '0rem 0.5rem 0.1rem' : '0.3rem 1rem 0.5rem')};
  text-decoration: none;

  ${props => props.tiny && 'font-size: ' + theme.fontSizes[0] + ';'}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`

export default Button

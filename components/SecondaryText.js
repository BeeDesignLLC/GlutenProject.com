// @flow
import Text from './Text'

const SecondaryText = Text.extend.attrs({
  color: 'grays.2',
})`
  font-style: italic;
`
SecondaryText.displayName = 'SecondaryText'
export default SecondaryText

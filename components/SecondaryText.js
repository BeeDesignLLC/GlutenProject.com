// @flow
import Text from './Text'

const SecondaryText = Text.extend.attrs({
  color: 'grays.2',
})`
  font-style: italic;
  max-width: 30em;
`
SecondaryText.displayName = 'SecondaryText'
export default SecondaryText

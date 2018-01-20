// @flow
import Text from './Text'

const LargeText = Text.extend.attrs({
  fontSize: 2,
})`
  line-height: 3.2ex;
  max-width: 35em;
`
LargeText.displayName = 'LargeText'
export default LargeText

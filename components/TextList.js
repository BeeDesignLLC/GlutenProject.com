// @flow
import {themeGet} from 'styled-system'
import Text from './Text'

const TextList = Text.withComponent('ul').extend`
  padding-left: ${themeGet('space.4')};

  & > li + li {
    margin-top: ${themeGet('space.2')};
  }
`

export const TextListItem = Text.withComponent('li')

TextList.displayName = 'TextList'
export default TextList

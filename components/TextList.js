// @flow
import {theme} from 'styled-system'
import Text from './Text'

const TextList = Text.withComponent('ul').extend`
  padding-left: ${theme('space.4')};

  & > li + li {
    margin-top: ${theme('space.2')};
  }
`

export const TextListItem = Text.withComponent('li')

TextList.displayName = 'TextList'
export default TextList

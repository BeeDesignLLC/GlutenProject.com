// @flow
import {theme} from 'styled-system'
import LargeText from './LargeText'

const LargeTextList = LargeText.withComponent('ul').extend`
  padding-left: ${theme('space.4')};

  & > li + li {
    margin-top: ${theme('space.2')};
  }
`

export const LargeTextListItem = LargeText.withComponent('li')

LargeTextList.displayName = 'LargeTextList'
export default LargeTextList

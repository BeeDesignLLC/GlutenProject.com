// @flow
import {themeGet} from 'styled-system'
import LargeText from './LargeText'

const LargeTextList = LargeText.withComponent('ul').extend`
  padding-left: ${themeGet('space.4')};

  & > li + li {
    margin-top: ${themeGet('space.2')};
  }
`

export const LargeTextListItem = LargeText.withComponent('li')

LargeTextList.displayName = 'LargeTextList'
export default LargeTextList

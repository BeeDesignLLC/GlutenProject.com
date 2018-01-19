// @flow
import {theme} from 'styled-system'
import LargeText from './LargeText'

const LargeTextList = LargeText.withComponent('ul').extend`
    margin: 0;
    padding-left: ${theme('space.4')};
`

export const LargeTextListItem = LargeText.withComponent('li')

LargeTextList.displayName = 'LargeTextList'
export default LargeTextList

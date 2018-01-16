// @flow
import {Grid as StyledGrid} from 'styled-css-grid'
import {
  space,
  width,
  color,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
} from 'styled-system'
import {gridRowGap} from '../utils/styled'

const Grid = StyledGrid.extend`
  ${space}
  ${width}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${boxShadow}
  ${gridRowGap}
`
Grid.displayName = 'Grid'
export default Grid

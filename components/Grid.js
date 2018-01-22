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
import {gridArea, gridRowGap, height} from '../utils/styled'

const Grid = StyledGrid.extend`
  grid-auto-rows: auto;

  ${space}
  ${width}
  ${height}
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
  ${gridArea}
`
Grid.displayName = 'Grid'
export default Grid

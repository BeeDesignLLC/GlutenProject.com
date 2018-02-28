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
} from 'styled-system'
import {gridArea, gridRowGap} from '../utils/styled'

const Grid = StyledGrid.extend`
  grid-auto-rows: auto;

  ${space}
  ${width}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridRowGap}
  ${gridArea}
`
Grid.displayName = 'Grid'
export default Grid

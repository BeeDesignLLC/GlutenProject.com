// @flow
import {style, responsiveStyle} from 'styled-system'
// import PropTypes from 'prop-types'

export const gridArea = style({
  prop: 'area',
  cssProperty: 'grid-area',
})

export const gridRowGap = responsiveStyle({
  prop: 'rowGap',
  cssProperty: 'grid-row-gap',
})

export const justifySelf = responsiveStyle({
  prop: 'justifySelf',
})

export const fontStyle = responsiveStyle({
  prop: 'fontStyle',
})

// export const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

export const text = [
  'color',
  'textAlign',
  'fontWeight',
  fontStyle,
  'letterSpacing',
  'lineHeight',
]

export const flex = [
  'flex',
  'justifyContent',
  'alignItems',
  'flexDirection',
  'flexWrap',
  'alignContent',
  'alignSelf',
  'order',
]

export const gridPlacement = [gridArea, justifySelf]

export const layout = ['space', 'width', 'height', 'position', ...flex, ...gridPlacement]

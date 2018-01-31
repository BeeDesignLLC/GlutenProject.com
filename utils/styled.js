// @flow
import {style, responsiveStyle} from 'styled-system'
import PropTypes from 'prop-types'

export const gridArea = style({
  prop: 'area',
  cssProperty: 'grid-area',
})

export const gridRowGap = style({
  prop: 'rowGap',
  cssProperty: 'grid-row-gap',
})

export const height = style({
  prop: 'height',
  cssProperty: 'height',
})

export const justifySelf = style({
  prop: 'justifySelf',
  cssProperty: 'justify-self',
})

export const position = responsiveStyle({
  prop: 'position',
  cssProperty: 'position',
})

export const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

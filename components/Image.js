// @flow
import styled from 'styled-components'
import {space, width, alignSelf} from 'styled-system'
import {gridArea, justifySelf} from '../utils/styled'

const Image = styled.img`
  max-width: 100%;

  ${space}
  ${width}
  ${gridArea}
  ${justifySelf}
  ${alignSelf}
`
export default Image

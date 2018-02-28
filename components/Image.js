// @flow
import system from 'system-components'
import {layout} from '../utils/styled'

const Image = system(
  {
    is: 'img',
  },
  ...layout
).extend`
  max-width: 100%;
`

Image.displayName = 'Image'
export default Image

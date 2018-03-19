// @flow
import system from 'system-components'
import {layout} from '../utils/styled'

const Image = system(
  {
    is: 'img',
    maxWidth: '100%',
  },
  ...layout
).extend`
`

Image.displayName = 'Image'
export default Image

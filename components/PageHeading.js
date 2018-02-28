// @flow
import system from 'system-components'
import {layout, text} from '../utils/styled'

const PageHeading = system(
  {
    is: 'h3',
    fontSize: 4,
    fontStyle: 'italic',
    fontWeight: 700,
    color: 'black',
    textAlign: ['center', 'right'],
    mb: '-5px',
  },
  ...text,
  ...layout
)

PageHeading.displayName = 'PageHeading'
export default PageHeading

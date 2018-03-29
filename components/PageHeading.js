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
).extend`
  html:not(.wf-active) & {
    letter-spacing: -2px;
    word-spacing: -1px;
    line-height: 1.3;
  }
`

PageHeading.displayName = 'PageHeading'
export default PageHeading

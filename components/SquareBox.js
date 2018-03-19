//@flow
import * as React from 'react'
import Box from './Box'

const SquareWrapper = Box.extend`
  display: block;
  height: 0;
  width: 100%;
  position: relative;
  padding-bottom: 100%;
`
const SquareBox = ({children, ...props}: {children: any}) => (
  <Box style={{display: 'block'}} {...props}>
    <SquareWrapper>
      <Box position="absolute" style={{top: 0, bottom: 0, left: 0, right: 0}}>
        {children}
      </Box>
    </SquareWrapper>
  </Box>
)

export default SquareBox

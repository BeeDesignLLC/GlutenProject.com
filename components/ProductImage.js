//@flow
import * as React from 'react'
import t from '../theme'
import Image from './Image'

type Props = {
  images: {
    dpr1: string,
    dpr2: string,
    dpr3: string,
    dpr4: string,
    amazon: string,
  },
}

const RefinedImage = Image.extend`
  background: white;
  object-fit: contain;
  justify-self: center;
  width: 100%;
  height: 100%;
  ${props => props.roundedCorners && 'border-radius:' + t.space[2] + ';'};
`

export default ({images, ...props}: Props) => {
  const tags = {}

  if (images.dpr1) {
    tags.src = images.dpr1
    tags.srcSet = `
      ${images.dpr1} 1x,
      ${images.dpr2} 2x,
      ${images.dpr3} 3x,
      ${images.dpr4} 4x
    `
  } else if (images.amazon) {
    tags.src = images.amazon
  } else {
    //eslint-disable-next-line no-console
    console.log('No image found')
    return null
  }

  return <RefinedImage {...tags} {...props} />
}

// @flow
import * as React from 'react'
import isPresent from 'is-present'
import Button from '../components/Button'
import {USD} from '../utils/currency'

type Props = {
  offer: {
    id: string,
    price: number,
    merchant: string,
    quantity: number,
  },
}

const RefinedButton = Button.extend`
  letter-spacing: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default ({offer, ...props}: Props) => {
  let lead = ''
  if (isPresent(offer.quantity)) {
    lead += `(${offer.quantity}) `
  }

  if (isPresent(offer.price) && offer.price > 1) {
    lead += USD(offer.price)
  } else {
    lead += 'Buy'
  }

  const link = '/link/offer/' + offer.id

  return (
    <RefinedButton is="a" href={link} target="_blank" rel="noopener nofollow" {...props}>
      <strong style={{marginRight: 4}}>{lead}</strong>
      {`from ${offer.merchant}`}
    </RefinedButton>
  )
}

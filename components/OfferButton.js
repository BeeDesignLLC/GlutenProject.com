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
    isAffiliate: boolean,
  },
  slug: string,
}

const RefinedButton = Button.extend`
  letter-spacing: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default ({offer, slug, ...props}: Props) => {
  let lead = ''
  if (isPresent(offer.quantity) && offer.quantity > 1) {
    lead += `(${offer.quantity}) `
  }

  if (isPresent(offer.price) && offer.price > 1) {
    lead += USD(offer.price)
  } else {
    lead += 'Buy'
  }

  const link = '/link/offer/' + offer.id

  const trackClick = () => {
    if (window.location.host === 'glutenproject.com') {
      const eventName = offer.isAffiliate
        ? 'clicked-affiliate-product'
        : 'clicked-product'
      window.Intercom && window.Intercom('trackEvent', eventName)
      window.gtag &&
        window.gtag('event', eventName, {
          event_category: 'engagement',
          event_label: slug,
        })
    }
  }

  return (
    <RefinedButton
      is="a"
      href={link}
      target="_blank"
      rel="noopener nofollow"
      onClick={trackClick}
      {...props}
    >
      <strong style={{marginRight: 4}}>{lead}</strong>
      {`from ${offer.merchant}`}
    </RefinedButton>
  )
}

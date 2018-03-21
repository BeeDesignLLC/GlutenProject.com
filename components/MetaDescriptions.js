// @flow
import * as React from 'react'

const defaultContent =
  'The Gluten Project is the first place in the world to easily search the entire list of certified gluten-free products and the places to buy them.'

type Props = {
  content?: string,
}

export default ({content = defaultContent}: Props) => (
  <React.Fragment>
    <meta name="description" content={content} />
    <meta property="og:description" content={content} />
    <meta name="twitter:description" content={content} />
  </React.Fragment>
)

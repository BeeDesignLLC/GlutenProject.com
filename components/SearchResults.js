// @flow
import * as React from 'react'
import {Highlight} from 'react-instantsearch/dom'
import {connectHits} from 'react-instantsearch/connectors'
import Box from '../components/Box'
import SectionHeading from '../components/SectionHeading'

type Props = {hits: []}

const SearchResults = ({hits, ...props}: Props) => {
  const consolidatedBrands = []

  hits.forEach(hit => {
    const found = consolidatedBrands.find(x => x.makerName === hit.makerName)
    if (found) {
      found.products.push(hit)
    } else {
      consolidatedBrands.push({
        makerName: hit.makerName,
        products: [hit],
      })
    }
  })

  return (
    <Box {...props}>
      {consolidatedBrands.map(brand => (
        <Box flexDirection="row" key={brand.makerName} mb={4}>
          <Box width={1 / 2} align="flex-end" pr={3}>
            <SectionHeading>{brand.makerName}</SectionHeading>
          </Box>
          <Box width={1 / 2}>
            {brand.products.map(hit => (
              <Highlight
                key={hit.objectID}
                attributeName="name"
                hit={hit}
                tagName="mark"
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default connectHits(SearchResults)

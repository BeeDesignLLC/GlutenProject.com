// @flow
import * as React from 'react'
import {theme} from 'styled-system'
import {Highlight} from 'react-instantsearch/dom'
import {connectInfiniteHits, connectStateResults} from 'react-instantsearch/connectors'
import VirtualList from 'react-tiny-virtual-list'
import Box, {RawBox} from '../components/Box'
import SectionHeading from '../components/SectionHeading'

const productHeight = 22
const brandSectionMargin = 24

const BrandBox = RawBox.extend`
  border-right: solid 3px ${theme('colors.green')};
`

type Props = {hits: [], hasMore: boolean, refine: any => any, IF: boolean}

const SearchResults = ({
  hits,
  hasMore,
  refine,
  searching,
  IF = true,
  ...props
}: Props) => {
  const consolidatedBrands = []
  const brandHeights = []
  let totalHeight = 0

  hits.forEach(hit => {
    const brandIndex = consolidatedBrands.findIndex(x => x.makerName === hit.makerName)
    if (brandIndex === -1) {
      consolidatedBrands.push({
        makerName: hit.makerName,
        products: [hit],
      })
      brandHeights.push(productHeight + brandSectionMargin)
      totalHeight += productHeight + brandSectionMargin
    } else {
      consolidatedBrands[brandIndex].products.push(hit)
      brandHeights[brandIndex] += productHeight
      totalHeight += productHeight
    }
  })

  let refining = false

  const onScroll = (scrollTop, event) => {
    // console.log('scroll', scrollTop)
  }
  const onItemsRendered = ({startIndex, stopIndex}) => {
    console.log(
      'render',
      searching,
      startIndex,
      stopIndex,
      consolidatedBrands.length,
      hasMore
    )

    if (!searching && !refining && stopIndex === consolidatedBrands.length - 1) {
      // refine()
      refining = true
      console.warn('REFINE!')
    }
  }

  return (
    IF && (
      <Box {...props}>
        <VirtualList
          width="100%"
          height={800}
          itemCount={consolidatedBrands.length}
          itemSize={brandHeights} // Also supports variable heights (array or function getter)
          onScroll={onScroll}
          onItemsRendered={onItemsRendered}
          renderItem={({index, style}) => (
            <Box flexDirection="row" key={index} style={style}>
              <BrandBox width={1.98 / 5} align="flex-end" pr={2} mr={2} mb={4} mt={1}>
                <SectionHeading style={{marginTop: -7}}>
                  {consolidatedBrands[index].makerName}
                </SectionHeading>
              </BrandBox>
              <Box width={3 / 5}>
                {consolidatedBrands[index].products.map(hit => (
                  <Highlight
                    key={hit.objectID}
                    attributeName="name"
                    hit={hit}
                    tagName="mark"
                  />
                ))}
              </Box>
            </Box>
          )}
        />
      </Box>
    )
  )

  // return (
  //   <Box {...props}>
  //     {consolidatedBrands.map(brand => (
  //       <Box flexDirection="row" key={brand.makerName} mb={4}>
  //         <Box width={1 / 2} align="flex-end" pr={3}>
  //           <SectionHeading>{brand.makerName}</SectionHeading>
  //         </Box>
  //         <Box width={1 / 2}>
  //           {brand.products.map(hit => (
  //             <Highlight
  //               key={hit.objectID}
  //               attributeName="name"
  //               hit={hit}
  //               tagName="mark"
  //             />
  //           ))}
  //         </Box>
  //       </Box>
  //     ))}
  //
  //     <button onClick={refine}>LOAD MORE</button>
  //   </Box>
  // )
}

export default connectInfiniteHits(connectStateResults(SearchResults))

// @flow
import * as React from 'react'
import {theme} from 'styled-system'
import {Highlight} from 'react-instantsearch/dom'
import {connectInfiniteHits, connectStateResults} from 'react-instantsearch/connectors'
import VirtualList from 'react-tiny-virtual-list'
import Grid from '../components/Grid'
import Box, {RawBox} from '../components/Box'
import SectionHeading from '../components/SectionHeading'
import Text from '../components/Text'

const productHeight = 21.65
const brandSectionMargin = 24

const BrandBox = RawBox.withComponent('header').extend`
  border-right: solid 3px ${theme('colors.green')};
`

type ResultRowProps = {
  item: Object,
  index: number,
  style: Object,
}
const ResultRow = ({item, index, style}: ResultRowProps) => (
  <Grid
    tag="section"
    key={index}
    style={style}
    columns={5}
    gap="1.5rem"
    areas={['brand brand products products products']}
  >
    <BrandBox
      area="brand"
      mb={4}
      style={{marginTop: 2, paddingRight: '.75rem', marginRight: '-.75rem'}}
    >
      <SectionHeading align="right" style={{marginTop: -5}} mb={0}>
        {item.makerName}
      </SectionHeading>
    </BrandBox>
    <Text area="products" lineHeight={0} mb={4}>
      {item.products.map(hit => (
        <Highlight key={hit.objectID} attributeName="name" hit={hit} tagName="mark" />
      ))}
    </Text>
  </Grid>
)

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

  hits.forEach(hit => {
    const brandIndex = consolidatedBrands.findIndex(x => x.makerName === hit.makerName)
    if (brandIndex === -1) {
      consolidatedBrands.push({
        makerName: hit.makerName,
        products: [hit],
      })
      brandHeights.push(productHeight + brandSectionMargin)
    } else {
      consolidatedBrands[brandIndex].products.push(hit)
      brandHeights[brandIndex] += productHeight
    }
  })

  let refining = false

  // const onItemsRendered = ({startIndex, stopIndex}) => {
  //   console.log(
  //     'render',
  //     searching,
  //     startIndex,
  //     stopIndex,
  //     consolidatedBrands.length,
  //     hasMore
  //   )
  //
  //   if (!searching && !refining && stopIndex === consolidatedBrands.length - 1) {
  //     // refine()
  //     refining = true
  //     console.warn('REFINE!')
  //   }
  // }

  return (
    IF && (
      <Box {...props}>
        {consolidatedBrands.map((item, i) => <ResultRow item={item} index={i} />)}
      </Box>
    )
  )
  // return (
  //   IF && (
  //     <Box {...props}>
  //       <VirtualList
  //         width="100%"
  //         height={800}
  //         itemCount={consolidatedBrands.length}
  //         itemSize={brandHeights}
  //         onItemsRendered={onItemsRendered}
  //         renderItem={props => (
  //           <ResultRow item={consolidatedBrands[props.index]} {...props} />
  //         )}
  //       />
  //     </Box>
  //   )
  // )
}

export default connectInfiniteHits(connectStateResults(SearchResults))

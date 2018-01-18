// @flow
import * as React from 'react'
import {theme} from 'styled-system'
import {Highlight} from 'react-instantsearch/dom'
import {connectInfiniteHits, connectStateResults} from 'react-instantsearch/connectors'
import {
  List,
  InfiniteLoader,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'

import Grid from '../components/Grid'
import Box, {RawBox} from '../components/Box'
import SectionHeading from '../components/SectionHeading'
import Text from '../components/Text'

const cache = new CellMeasurerCache({
  defaultHeight: 50,
  fixedWidth: true,
})

const productHeight = 21.65
const brandSectionMargin = 24

const BrandBox = RawBox.withComponent('header').extend`
  border-right: solid 3px ${theme('colors.green')};
`

type RowProps = {
  index: number,
  style: Object,
  key: any,
}

type Props = {hits: [], hasMore: boolean, refine: any => any, IF: boolean}

function SearchResults({
  /** Are there more items to load? (This information comes from the most recent API request.) */
  hasMore,
  /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
  searching,
  /** List of items loaded so far */
  hits,
  /** Callback function (eg. Redux action-creator) responsible for loading the next page of items */
  refine,
  IF,
  ...props
}: Props) {
  const consolidatedBrands = []
  const brandHeights = []

  cache.clearAll()

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

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const rowCount = hasMore ? consolidatedBrands.length + 1 : consolidatedBrands.length

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  // const loadMoreRows = searching ? () => {} : refine
  const loadMoreRows = () => {}

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({index}) => !hasMore || index < consolidatedBrands.length

  const RowRenderer = ({index, key, style, parent}: RowProps) => {
    let item

    if (!isRowLoaded({index})) {
      return (
        <Box key={key} style={style}>
          Loading...
        </Box>
      )
    } else {
      item = consolidatedBrands[index]
    }

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <Grid
          tag="section"
          columns={5}
          gap="1.5rem"
          areas={['brand brand products products products']}
          style={style}
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
              <Highlight
                key={hit.objectID}
                attributeName="name"
                hit={hit}
                tagName="mark"
              />
            ))}
          </Text>
        </Grid>
      </CellMeasurer>
    )
  }

  return (
    IF && (
      <Box {...props}>
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
          rowCount={rowCount}
          minimumBatchSize={20}
          threshold={10}
        >
          {({onRowsRendered, registerChild}) => (
            <AutoSizer defaultHeight={600}>
              {({height, width}) => (
                <List
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  rowRenderer={RowRenderer}
                  rowCount={rowCount}
                  deferredMeasurementCache={cache}
                  rowHeight={cache.rowHeight}
                  height={height}
                  width={width}
                />
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </Box>
    )
  )
}

export default connectInfiniteHits(connectStateResults(SearchResults))

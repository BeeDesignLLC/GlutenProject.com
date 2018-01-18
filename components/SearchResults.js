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

const BrandBox = RawBox.withComponent('header').extend`
  border-right: solid 3px ${theme('colors.green')};
`

type RowProps = {
  index: number,
  style: Object,
  key: any,
  parent: any,
}

type Props = {hits: [], hasMore: boolean, refine: any => any, IF: boolean}
type State = {
  loadedRowCount: number,
  loadedPageMap: Object,
  loadingRowCount: number,
  consolidatedBrands: [],
}

class SearchResults extends React.Component<Props, State> {
  state = {
    loadedPageMap: {},
    consolidatedBrands: [],
  }

  componentWillMount() {
    this._computeState(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.searchState.query !== nextProps.searchState.query)
      this.setState({loadedPageMap: {}})

    if (this.props.hits !== nextProps.hits) this._computeState(nextProps)
  }

  _computeState({hits}) {
    const consolidatedBrands = []

    hits.forEach(hit => {
      const brandIndex = consolidatedBrands.findIndex(x => x.makerName === hit.makerName)
      if (brandIndex === -1) {
        consolidatedBrands.push({
          makerName: hit.makerName,
          products: [hit],
        })
      } else {
        consolidatedBrands[brandIndex].products.push(hit)
      }
    })

    cache.clearAll()
    this.setState({consolidatedBrands})
    console.log('updating state...')
  }

  render() {
    const {hasMore, IF, ...props} = this.props

    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const rowCount = hasMore
      ? this.state.consolidatedBrands.length + 1
      : this.state.consolidatedBrands.length
    // const rowCount = hasMore
    //   ? this.props.searchResults.nbHits
    //   : this.state.consolidatedBrands.length

    return (
      IF && (
        <Box {...props}>
          <InfiniteLoader
            isRowLoaded={this._isRowLoaded}
            loadMoreRows={this._loadMoreRows}
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
                    rowRenderer={this._rowRenderer}
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

  _loadMoreRows = x => {
    console.log(
      'load',
      this.props.searchState.query,
      this.props.searching,
      x,
      this.state.consolidatedBrands.length,
      'currentPage:',
      this.props.searchResults.page
    )

    // if (!this.state.loadedPageMap[this.props.searchResults.page + 1]) {
    this.props.refine()
    this.state.loadedPageMap[this.props.searchResults.page + 1] = 'loaded'
    console.log('loading page', this.props.searchResults.page + 1)
    // }

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    // if (!searching) {
    //   this.props.refine()
    // }
    return
  }

  // Every row is loaded except for our loading indicator row.
  _isRowLoaded = ({index}) =>
    !this.props.hasMore || index < this.state.consolidatedBrands.length

  _rowRenderer = ({index, key, style, parent}: RowProps) => {
    let item
    if (!this._isRowLoaded({index})) {
      item = {products: []}
    } else {
      item = this.state.consolidatedBrands[index]
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
              {item.makerName || '...'}
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
}

export default connectInfiniteHits(connectStateResults(SearchResults))

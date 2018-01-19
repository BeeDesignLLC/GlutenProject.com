// @flow
import * as React from 'react'
import {withRouter} from 'next/router'
import {theme} from 'styled-system'
import {Highlight} from 'react-instantsearch/dom'
import {connectInfiniteHits, connectStateResults} from 'react-instantsearch/connectors'

import Grid from '../components/Grid'
import Box, {RawBox} from '../components/Box'
import ArticleHeading from '../components/ArticleHeading'
import SectionHeading from '../components/SectionHeading'
import LargeText from '../components/LargeText'
import Text from '../components/Text'
import Button from '../components/Button'

const BrandBox = RawBox.withComponent('header').extend`
  border-right: solid 3px ${theme('colors.green')};
`

type Props = {
  hits: [],
  hasMore: boolean,
  refine: any => any,
  if: boolean,
  router: Object,
  searchState: Object,
  searchResults: Object,
}
const SearchResults = ({
  hits,
  hasMore,
  refine,
  router: {query: {ssrSearchQuery}},
  searchResults,
}: Props) => {
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

  return (
    <React.Fragment>
      {ssrSearchQuery && (
        <Box area="heading">
          <ArticleHeading>List of Certified Gluten Free {ssrSearchQuery}</ArticleHeading>
          <LargeText color="grays.3">
            All {searchResults && `${searchResults.nbHits} `}items have been certified
            gluten free by the Gluten-Free Certification Organization as of January 2017.
          </LargeText>
        </Box>
      )}
      <Box area="main" style={{overflow: 'auto'}}>
        {consolidatedBrands.map(item => <Row item={item} key={item.makerName} />)}
        {hasMore && (
          <Button onClick={refine} alignSelf="center">
            load more
          </Button>
        )}
      </Box>
    </React.Fragment>
  )
}

type RowProps = {
  item: Object,
}
const Row = ({item}: RowProps) => (
  <Grid
    tag="section"
    columns={5}
    gap="1.5rem"
    areas={['brand brand products products products']}
  >
    <BrandBox
      area="brand"
      mb={5}
      style={{
        marginTop: 2,
        paddingRight: '.75rem',
        marginRight: '-.75rem',
      }}
    >
      <SectionHeading align="right" style={{marginTop: -5}} mb={0}>
        {item.makerName || '...'}
      </SectionHeading>
    </BrandBox>
    <Text area="products" lineHeight={0} mb={5}>
      {item.products.map(hit => (
        <Highlight key={hit.objectID} attributeName="name" hit={hit} tagName="mark" />
      ))}
    </Text>
  </Grid>
)

export default withRouter(connectInfiniteHits(connectStateResults(SearchResults)))

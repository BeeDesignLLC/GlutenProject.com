// @flow
import * as React from 'react'
import {withRouter} from 'next/router'
import theme from '../theme'
import {themeGet} from 'styled-system'
import {connectInfiniteHits, connectStateResults} from 'react-instantsearch/connectors'
import title from 'title'
import isPresent from 'is-present'

import Grid from '../components/Grid'
import Box from '../components/Box'
import Heading from '../components/Heading'
import LargeText from '../components/LargeText'
import Text from '../components/Text'
import Button from '../components/Button'
import ProductPreview from './ProductPreview'

const ProductGrid = Grid.extend`
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: ${theme.space[4]};
  z-index: 1;
  width: 100%;
  max-width: 65rem;
  justify-content: center;

  @media (min-width: ${themeGet('breakpoints.2')}) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    max-width: 76rem;
  }
`

type Props = {
  hits: Object[],
  hasMore: boolean,
  refine: any => any,
  router: Object,
  searchState: Object,
  searchResults: Object,
}
const SearchResults = ({
  hits,
  hasMore,
  refine,
  router: {query: {ssr, q}},
  searchResults,
}: Props) => {
  return (
    <React.Fragment>
      {ssr && (
        <Box area="heading" mt={3}>
          <Heading is="h1" fontSize={[4, 3]} fontStyle="italic" color="black">
            List of All Certified Gluten-Free {title(q)}
          </Heading>
          <LargeText color="grays.3">
            All {searchResults && `${searchResults.nbHits} `}products have been certified
            gluten-free by GFCO as of January 2017.
          </LargeText>
        </Box>
      )}

      {isPresent(searchResults.query) && (
        <Box area="main" alignItems="center">
          <ProductGrid mb={4}>
            {hits.map(hit => <ProductPreview product={hit} key={hit.objectID} />)}
          </ProductGrid>

          {hasMore ? (
            <Button onClick={refine} alignSelf="center">
              Load More
            </Button>
          ) : (
            <Text alignSelf="center">THE END</Text>
          )}
        </Box>
      )}
    </React.Fragment>
  )
}

export default withRouter(connectInfiniteHits(connectStateResults(SearchResults)))

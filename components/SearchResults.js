// @flow
import * as React from 'react'
import {withRouter} from 'next/router'
import {theme} from 'styled-system'
import {Highlight} from 'react-instantsearch/dom'
import {connectInfiniteHits, connectStateResults} from 'react-instantsearch/connectors'
import titleize from 'titleize'

import Grid from '../components/Grid'
import Box from '../components/Box'
import ArticleHeading from '../components/ArticleHeading'
import SectionHeading from '../components/SectionHeading'
import LargeText from '../components/LargeText'
import Text from '../components/Text'
import Button, {TinyButton} from '../components/Button'

const RowGrid = Grid.withComponent('section').extend`
  grid-template-columns: 1fr;
  grid-template-areas: 'brand'
                       'products';
  grid-gap: ${theme('space.2')};

  @media (min-width: ${theme('breakpoints.1')}) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'brand brand products products products';
    grid-gap: ${theme('space.4')};
  }
`

const BrandBox = Box.extend`
  border-top: solid 3px ${theme('colors.green')};
  padding-top: ${theme('space.2')};

  @media (min-width: ${theme('breakpoints.1')}) {
    border-top: none;
    border-right: solid 3px ${theme('colors.green')};
    padding-top: 0;
  }
`

const ProductBox = Box.extend`
  @media (min-width: ${theme('breakpoints.1')}) {
    &:not(:hover) > .productHover {
      display: none;
    }
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
  const rows = []
  let currentBrand = ''
  let currentBrandProducts = []

  // Seed first brand
  if (hits.length) currentBrand = hits[0].makerName

  hits.forEach(hit => {
    if (hit.makerName === currentBrand) {
      currentBrandProducts.push(hit)
    } else {
      // New brand found, so create row from current brand
      rows.push(
        <Row
          brandName={currentBrand}
          products={currentBrandProducts}
          key={currentBrand + currentBrandProducts[0].name}
        />
      )

      // Set up new brand
      currentBrand = hit.makerName
      currentBrandProducts = [hit]
    }
  })

  // Save last brand
  if (hits.length > 0) {
    rows.push(
      <Row
        brandName={currentBrand}
        products={currentBrandProducts}
        key={currentBrand + currentBrandProducts[0].name}
      />
    )
  }

  return (
    <React.Fragment>
      {ssr && (
        <Box area="heading">
          <ArticleHeading tag="h1">
            List of All Certified Gluten Free {titleize(q)}
          </ArticleHeading>
          <LargeText color="grays.3">
            All {searchResults && `${searchResults.nbHits} `}products have been certified
            gluten free by GFCO as of January 2017.
          </LargeText>
        </Box>
      )}

      <Box area="main">
        {rows}

        {hasMore ? (
          <Button onClick={refine} alignSelf="center">
            load more
          </Button>
        ) : (
          <Text alignSelf="center">THE END</Text>
        )}
      </Box>
    </React.Fragment>
  )
}

type RowProps = {
  brandName: string,
  products: Object[],
}
const Row = ({brandName = '...', products}: RowProps) => (
  <RowGrid columns={null}>
    <BrandBox
      area="brand"
      mb={[0, 0, 5]}
      mt="2px"
      pr={[0, 0, '0.75rem']}
      mr={[0, 0, '-0.75rem']}
    >
      <SectionHeading tag="h4" align={['left', 'left', 'right']} mt={'-5px'} mb={0}>
        {brandName}
      </SectionHeading>
    </BrandBox>
    <Box area="products" mb={5}>
      {products.map(hit => (
        <ProductBox
          key={hit.objectID}
          flexDirection="row"
          align="flex-start"
          onClick={() => {
            window.Intercom(
              'showNewMessage',
              `Where can I buy:
— ${hit.name} (${hit.makerName})

(📣 Note: until we get links on the website, we're messaging them to you on-demand!)`
            )
            if (window.location.host === 'glutenproject.com') {
              window.Intercom && window.Intercom('trackEvent', 'clicked-product')
              window.gtag &&
                window.gtag('event', 'clicked-product', {
                  event_category: 'engagement',
                  event_label: `${hit.name} (${hit.makerName})`,
                })
            }
          }}
        >
          <TinyButton className="productHover" mt={'2px'} mr={2}>
            find
          </TinyButton>
          <Text>
            <Highlight attributeName="name" hit={hit} tagName="mark" />
          </Text>
        </ProductBox>
      ))}
    </Box>
  </RowGrid>
)

export default withRouter(connectInfiniteHits(connectStateResults(SearchResults)))

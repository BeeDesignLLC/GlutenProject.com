// @flow
import * as React from 'react'
import {withRouter} from 'next/router'
import theme from '../theme'
import {themeGet} from 'styled-system'
import {Highlight} from 'react-instantsearch/dom'
import {connectInfiniteHits, connectStateResults} from 'react-instantsearch/connectors'
import title from 'title'

import Grid from '../components/Grid'
import Box from '../components/Box'
import Heading from '../components/Heading'
import LargeText from '../components/LargeText'
import Text from '../components/Text'
import Button from '../components/Button'
import ProductPreview from './ProductPreview'

const ProductGrid = Grid.extend`
  grid-auto-rows: max-content;
  --productColumns: 1;
  grid-template-columns: repeat(
    var(--productColumns),
    minmax(${theme.space[8]}, ${theme.space[10]})
  );
  grid-gap: ${theme.space[4]};
  z-index: 1;

  @media (min-width: 28rem) {
    --productColumns: 2;
  }
  @media (min-width: 44rem) {
    --productColumns: 3;
  }
  @media (min-width: ${themeGet('breakpoints.0')}) {
    --productColumns: 2;
    grid-template-columns: repeat(
      var(--productColumns),
      minmax(${theme.space[8]}, ${theme.space[9]})
    );
  }
  @media (min-width: ${themeGet('breakpoints.1')}) {
    --productColumns: 3;
  }
  @media (min-width: 83rem) {
    --productColumns: 4;
  }
`

const RowGrid = Grid.withComponent('section').extend`
  grid-template-columns: 1fr;
  grid-template-areas: 'brand'
                       'products';
  grid-gap: ${themeGet('space.2')};

  @media (min-width: ${themeGet('breakpoints.1')}) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'brand brand products products products';
    grid-gap: ${themeGet('space.4')};
  }
`

const BrandBox = Box.extend`
  border-top: solid 3px ${themeGet('colors.green')};
  padding-top: ${themeGet('space.2')};

  @media (min-width: ${themeGet('breakpoints.1')}) {
    border-top: none;
    border-right: solid 3px ${themeGet('colors.green')};
    padding-top: 0;
  }
`

const ProductBox = Box.extend`
  @media (min-width: ${themeGet('breakpoints.1')}) {
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
  return (
    <React.Fragment>
      {ssr && (
        <Box area="heading">
          <Heading is="h1" fontSize={[4, 3]} fontStyle="italic" color="black">
            List of All Certified Gluten-Free {title(q)}
          </Heading>
          <LargeText color="grays.3">
            All {searchResults && `${searchResults.nbHits} `}products have been certified
            gluten-free by GFCO as of January 2017.
          </LargeText>
        </Box>
      )}

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
      <Heading is="h4" textAlign={['left', 'left', 'right']} mt={'-5px'} mb={0}>
        {brandName}
      </Heading>
    </BrandBox>
    <Box area="products" mb={5}>
      {products.map(hit => (
        <ProductBox
          key={hit.objectID}
          flexDirection="row"
          alignItems="flex-start"
          onClick={() => {
            if (window.location.host === 'glutenproject.com') {
              const eventName = hit.isAffiliate
                ? 'clicked-affiliate-product'
                : 'clicked-product'
              window.Intercom && window.Intercom('trackEvent', eventName)
              window.gtag &&
                window.gtag('event', eventName, {
                  event_category: 'engagement',
                  event_label: `${hit.name} (${hit.brandName})`,
                })
            }
          }}
        >
          {hit.hasOffers ? (
            <Button
              tiny
              is="a"
              mt={'2px'}
              mr={2}
              href={
                hit.brandWhereToBuyUrl
                  ? hit.brandWhereToBuyUrl
                  : '/link/offer/' + hit.offers[0].id
              }
              target="_blank"
              rel={hit.brandWhereToBuyUrl ? 'noopener' : 'nofollow noopener'}
            >
              {hit.brandWhereToBuyUrl ? 'find' : 'details'}
            </Button>
          ) : (
            <Button
              tiny
              className="productHover"
              mt={'2px'}
              mr={2}
              onClick={() => {
                if (window.Intercom) {
                  window.Intercom(
                    'showNewMessage',
                    `Where can I buy:
${hit.brandName}. ${hit.name}

📣
We'll find this product for you on-demand until we add its link on the site. Make sure to leave your email!`
                  )
                } else {
                  alert(
                    'It seems Intercom is being blocked by one of your browser extensions. Whitelist Intercom to chat with us :)'
                  )
                }
              }}
            >
              find
            </Button>
          )}
          <Text>
            <Highlight attributeName="name" hit={hit} tagName="mark" />
          </Text>
        </ProductBox>
      ))}
    </Box>
  </RowGrid>
)

export default withRouter(connectInfiniteHits(connectStateResults(SearchResults)))

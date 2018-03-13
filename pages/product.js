// @flow
import * as React from 'react'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'
import isPresent from 'is-present'
import App from '../components/App'
import Grid from '../components/Grid'
import theme from '../theme'
import Box from '../components/Box'
// import LargeText from '../components/LargeText'
// import A from '../components/A'
import ProductImage from '../components/ProductImage'
import IngredientList from '../components/IngredientList'

const ProductGrid = Grid.extend`
  grid-gap: ${theme.space[4]};
  grid-template-columns: 1fr minmax(300px, 500px) 1fr;
  grid-template-areas:
    'info image   links'
    'info reviews reviews';

  @media (min-width: ${theme.breakpoints[0]}) {
  }

  @media (min-width: ${theme.breakpoints[1]}) {
  }
`

const productQuery = gql`
  query Product($slug: String!) {
    Product(slug: $slug) {
      id
      name
      upc
      sku
      gfCert
      gfCertLevel
      ingredients
      offers {
        id
        merchant
        isAffiliate
        price
      }
      brand {
        id
        name
        whereToBuyUrl
      }
    }
    productImages(slug: $slug) {
      dpr1
      dpr2
      dpr3
      dpr4
      amazon
    }
  }
`

type Props = {
  data: any,
}

class ProductPage extends React.Component<Props> {
  static async getInitialProps({query}: any) {
    return await apollo.query({
      query: productQuery,
      variables: {slug: query.slug},
    })
  }

  render() {
    const {data: {error, Product: product, productImages}} = this.props
    if (error) {
      alert('gql error' + error)
    }

    return (
      <App title="TODO">
        <ProductGrid area="main">
          <Box area="info">
            <h1>{product.name}</h1>
            <h1>{product.brand.name}</h1>
            <Box bg="white">
              {isPresent(product.ingredients) && (
                <IngredientList ingredients={product.ingredients} />
              )}
            </Box>
          </Box>
          {isPresent(productImages) && (
            <ProductImage
              area="image"
              images={productImages}
              alt={`${product.brandName} ${product.name}`}
            />
          )}
          <Box area="reviews" bg="white">
            <h2>Reviews coming soon</h2>
          </Box>
        </ProductGrid>
      </App>
    )
  }
}

export default ProductPage

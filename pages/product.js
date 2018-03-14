// @flow
import * as React from 'react'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'
import isPresent from 'is-present'
import App from '../components/App'
import t from '../theme'
import Box from '../components/Box'
import SquareBox from '../components/SquareBox'
import OfferButton from '../components/OfferButton'
import Heading from '../components/Heading'
import Text from '../components/Text'
import SmallText from '../components/SmallText'
import SecondaryText from '../components/SecondaryText'
import A from '../components/A'
import ProductImage from '../components/ProductImage'
import IngredientList from '../components/IngredientList'

type Props = {
  data: any,
}

const productQuery = gql`
  query Product($slug: String!) {
    Product(slug: $slug) {
      id
      name
      upc
      sku
      gfCerts
      ingredients
      description
      offers {
        id
        merchant
        isAffiliate
        price
        quantity
      }
      brand {
        id
        name
        whereToBuyUrl
        allerganStatementUrl
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

const Name = (props: Object) => (
  <Heading
    is="h1"
    fontSize={t.fontSizes[4]}
    fontWeight={700}
    textAlign="left"
    color="black"
    {...props}
  />
)

const WhiteBox = Box.extend`
  background: white;
  border-radius: ${t.space[2]};
  padding: ${t.space[3]};
`

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

    const offers = product.offers.slice().sort((a, b) => {
      if (!isPresent(a.price) && !isPresent(b.price)) {
        return a.merchant.toLowerCase() - b.merchant.toLowerCase()
      } else if (!isPresent(a.price)) {
        return 1
      } else if (!isPresent(b.price)) {
        return -1
      } else {
        return a.price - b.price
      }
    })

    const gfCertString = product.gfCerts.includes('GFCO') ? '10ppm GFCO' : ''

    return (
      <App title="TODO">
        <Box area="info">
          <Text color="grays.0" mb={1}>
            {product.brand.name}
          </Text>
          <Name mb={5}>{product.name}</Name>

          <Text is="ul" color="grays.2">
            <li>Certified gluten-free — {gfCertString}</li>
            {product.isOrganic && <li>Organic</li>}
          </Text>
          {isPresent(product.description) && (
            <Text color="grays.2" mt={4}>
              {product.description}
            </Text>
          )}

          <Box mt={6}>
            <WhiteBox>
              <React.Fragment>
                <Heading
                  is="h2"
                  fontSize={2}
                  fontWeight={700}
                  textAlign="left"
                  mb={2}
                  color="black"
                >
                  Ingredients
                </Heading>
                {isPresent(product.ingredients) ? (
                  <IngredientList ingredients={product.ingredients} />
                ) : (
                  <Text fontStyle="italic">Unknown</Text>
                )}
              </React.Fragment>
            </WhiteBox>
            {isPresent(product.brand.allerganStatementUrl) && (
              <Text mt={2} textAlign="center">
                <A
                  href={product.brand.allerganStatementUrl}
                  target="_blank"
                  rel="noopener"
                >
                  {product.brand.name + ' Allergan Statement'}
                </A>
              </Text>
            )}
            <SmallText mt={6}>
              Disclaimer: Information, statements, and reviews regarding products have not
              been evaluated by the Food and Drug Administration. Results vary person to
              person, and there is no guarantee of specific results. The Gluten Project
              assumes no liability for inaccuracies or misstatements about products.
            </SmallText>
          </Box>
        </Box>

        {isPresent(productImages) && (
          <SquareBox area="image">
            <ProductImage
              images={productImages}
              alt={`Photo of ${product.brand.name} ${product.name}`}
              maxWidth={500}
              roundedCorners
            />
          </SquareBox>
        )}

        <Box area="links" justifyContent="center">
          <Box alignSelf="flex-start" alignItems="center">
            {offers.map(offer => <OfferButton offer={offer} key={offer.id} mb={2} />)}

            <SecondaryText>
              <A
                is="button"
                onClick={() => {
                  if (window.Intercom) {
                    window.Intercom(
                      'showNewMessage',
                      `Product ${window.location} (${product.id})

The problem is: `
                    )
                  } else {
                    alert(
                      'It seems Intercom is being blocked by one of your browser extensions. Whitelist Intercom to message us :)'
                    )
                  }
                }}
              >
                Report problem
              </A>
            </SecondaryText>
          </Box>
        </Box>

        <WhiteBox area="review" alignSelf="flex-start" height="300px">
          <Heading is="h3" fontSize={2} color="black">
            Reviews Coming Soon
          </Heading>
        </WhiteBox>
      </App>
    )
  }
}

export default ProductPage

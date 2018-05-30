// @flow
import * as React from 'react'
import gql from 'graphql-tag'
import {JSONLD, Product, Generic} from 'react-structured-data'
import apollo from '../lib/apollo'
import isPresent from 'is-present'
import withError from '../components/withError'
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
  url: any,
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
      facilityStatement
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
    mb={0}
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
    const result = await apollo.query({
      query: productQuery,
      variables: {slug: query.slug},
    })

    let statusCode
    if (!isPresent(result.data.Product)) {
      statusCode = 404
    }
    return {statusCode, ...result}
  }

  componentDidMount() {
    window.gtag &&
      window.gtag('event', 'view-product', {
        event_category: 'engagement',
        event_label: this.props.url.query.slug,
      })
  }

  render() {
    let {
      data: {Product: product, productImages},
      url: {query},
    } = this.props

    if (!isPresent(productImages)) productImages = {}

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

    const gfCertString = product.gfCerts.includes('GFCO') ? '10ppm' : ''

    return (
      <App
        title={product.brand.name + ' ' + product.name + ' (certified gluten-free)'}
        description={product.description}
      >
        <Box area="name">
          <Text color="grays.0" mb={1}>
            {product.brand.name}
          </Text>
          <Name>{product.name}</Name>
        </Box>

        {isPresent(productImages.dpr1) && (
          <SquareBox area="image">
            <ProductImage
              images={productImages}
              alt={`Photo of ${product.brand.name} ${product.name}`}
              maxWidth={500}
              roundedCorners
            />
          </SquareBox>
        )}

        <Box area="info">
          <Text is="ul" color="grays.2">
            <li>Certified gluten-free — {gfCertString}</li>
            {product.isOrganic && <li>Organic</li>}
          </Text>
          {isPresent(product.description) && (
            <Text color="grays.2" mt={4}>
              {product.description}
            </Text>
          )}

          <Box mt={[4, 6]}>
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
            {isPresent(product.facilityStatement) && (
              <Text color="grays.1" mt={3} mb={1} mx={3}>
                {product.facilityStatement}
              </Text>
            )}
            {isPresent(product.brand.allerganStatementUrl) && (
              <Text mt={2} mx={3}>
                <A
                  href={product.brand.allerganStatementUrl}
                  target="_blank"
                  rel="noopener"
                >
                  {product.brand.name + ' Allergen Statement'}
                </A>
              </Text>
            )}
          </Box>
        </Box>

        <Box area="links" justifyContent="center" maxWidth="100%">
          <Box
            alignSelf={['center', 'center', 'center', 'flex-start']}
            alignItems="center"
            maxWidth="100%"
          >
            {offers.map(offer => (
              <OfferButton offer={offer} key={offer.id} slug={query.slug} mb={2} />
            ))}

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

        <WhiteBox area="review" alignSelf="flex-start" height={['auto', 300]}>
          <Heading is="h3" fontSize={2} color="black" textAlign="left">
            Reviews Coming Soon
          </Heading>
        </WhiteBox>

        <Box area="disclaimer">
          <SmallText>
            Disclaimers: <br />
            <br />
            Certifications and ingredients are subject to change at the
            manufacturer&rsquo;s discretion. For the most complete and up-to-date
            information, please refer to the product packaging. <br />
            <br />
            Information, statements, and reviews regarding products have not been
            evaluated by the Food and Drug Administration. Results vary person to person,
            and there is no guarantee of specific results. The Gluten Project assumes no
            liability for inaccuracies or misstatements about products.
          </SmallText>
        </Box>

        <JSONLD>
          <Product
            name={product.name}
            brand={product.brand.name}
            image={productImages.dpr1}
            description={product.description}
          >
            <Generic
              type="offers"
              jsonldtype="AggregateOffer"
              schema={{
                lowPrice: lowestPrice(product.offers),
                highPrice: highestPrice(product.offers),
                priceCurrency: 'USD',
                offerCount: product.offers.length,
              }}
            />
          </Product>
        </JSONLD>
      </App>
    )
  }
}

const lowestPrice = offers => {
  if (!offers.length) return null
  const prices = offers.map(offer => offer.price).sort()
  if (!prices.length) return null
  return prices[0]
}
const highestPrice = offers => {
  if (!offers.length) return null
  const prices = offers.map(offer => offer.price).sort()
  if (!prices.length) return null
  return prices[prices.length - 1]
}

export default withError(ProductPage)

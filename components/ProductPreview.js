// @flow
import * as React from 'react'
import Link from 'next/link'
import {css} from 'styled-components'
import isPresent from 'is-present'
import t from '../theme'
import Grid from '../components/Grid'
import Box from '../components/Box'
import SquareBox from '../components/SquareBox'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Text from '../components/Text'
import SmallText from '../components/SmallText'
import {IngredientsIcon} from './Icons'
import IngredientList from './IngredientList'
import ProductImage from './ProductImage'
import {USD} from '../utils/currency'

const handleIntercomMessage = (hit: Object) => {
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
}

const Name = (props: Object) => (
  <Heading
    is="h2"
    area="name"
    fontSize="2.3ex"
    fontWeight={700}
    textAlign="left"
    mb={0}
    color="black"
    letterSpacing="0.01ex"
    {...props}
  />
)

const hoverStyles = `
	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 10px 0 rgba(50, 50, 93, 0.1);
	}
`

const Card = Box.extend`
  transition: border, transform, box-shadow 0.15s ease;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
  border-radius: ${t.space[2]};
  height: 100%;
  border: 1px solid white;
  padding: ${t.space[3]};
  transition: transform 0.15s ease;

  ${props =>
    props.showBorder &&
    css`
      border: 1px solid ${t.colors.green};
    `};

  ${props =>
    props.clicked &&
    css`
      transform: scale(1.05);
    `};

  @media (hover: hover) {
    ${hoverStyles};
  }
  @-moz-document url-prefix() {
    ${hoverStyles};
  }
`

const SimpleGrid = Grid.extend`
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'brand find'
    'name  find';
  grid-gap: ${t.space[1]};
`

const SimplePreviewCard = Card.extend`
  width: 100%;
  max-width: 33rem;
  margin: auto;
  grid-column: 1 / -1;
`

type Props = {
  product: Object,
}

const SimplePreview = ({product, ...props}: Props) => (
  <SimplePreviewCard {...props}>
    <SimpleGrid>
      <SmallText area="brand" color="grays.0">
        {product.brandName}
      </SmallText>
      <Name area="name">{product.name}</Name>
      {isPresent(product.brandWhereToBuyUrl) ? (
        <Button
          area="find"
          is="a"
          href={product.brandWhereToBuyUrl}
          target="_blank"
          rel="noopener"
          alignSelf="center"
        >
          Where to Buy
        </Button>
      ) : (
        <Button
          area="find"
          alignSelf="center"
          onClick={() => handleIntercomMessage(product)}
        >
          Find
        </Button>
      )}
    </SimpleGrid>
  </SimplePreviewCard>
)

const OfferGrid = Grid.extend`
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${props =>
    props.hasDetails
      ? `
    'name   name'
    'image  image'
    'details price'
		`
      : `
    'name   name'
		`};
`

const IngredientsCard = Box.extend`
  transition: all 0.15s ease;
  background: white;
  position: absolute;
  top: 98%;
  left: -1px;
  right: -1px;
  padding: ${t.space[3]};
  overflow: hidden;

  box-shadow: 0 8px 10px 0 rgba(50, 50, 93, 0.1);
  border-bottom-left-radius: ${t.space[2]};
  border-bottom-right-radius: ${t.space[2]};
  border-left: 1px solid ${t.colors.green};
  border-right: 1px solid ${t.colors.green};
  border-bottom: 1px solid ${t.colors.green};
`

type State = {
  showIngredients: boolean,
  clicked: boolean,
}
class OfferPreview extends React.Component<Props, State> {
  state = {
    showIngredients: false,
    clicked: false,
  }

  toggleIngredients = event => {
    event.preventDefault()
    event.stopPropagation()
    this.setState(state => ({
      showIngredients: !state.showIngredients,
    }))
  }
  showIngredients = () => {
    this.setState({showIngredients: true})
  }
  hideIngredients = () => {
    this.setState({showIngredients: false})
  }

  render() {
    const {product, ...props} = this.props

    const hasDetails =
      isPresent(product.thumbnails) ||
      isPresent(product.ingredients) ||
      isPresent(product.price)

    return (
      <Card
        position="relative"
        {...props}
        style={{zIndex: this.state.showIngredients ? 1 : 0}}
        showBorder={this.state.showIngredients}
        clicked={this.state.clicked}
      >
        {isPresent(product.ingredients) &&
          this.state.showIngredients && (
            <IngredientsCard
              onMouseEnter={this.showIngredients}
              onMouseLeave={this.hideIngredients}
              onClick={this.hideIngredients}
              style={{
                //display: this.state.showIngredients ? 'block' : 'none',
                // transform: this.state.showIngredients ? 'translateY(98%)' : null,
                border: this.state.showIngredients ? null : 'none',
              }}
            >
              <Heading
                is="h3"
                fontSize={1}
                fontWeight={700}
                textAlign="left"
                mb={2}
                color="black"
              >
                Ingredients
              </Heading>
              <IngredientList ingredients={product.ingredients} />
            </IngredientsCard>
          )}

        <Link
          href={`/product?slug=${product.slug}`}
          as={`/p/${product.slug}`}
          passHref
          prefetch
        >
          <Box is="a" height="100%" bg="white">
            <OfferGrid
              hasDetails={hasDetails}
              onClick={() => this.setState({clicked: true})}
            >
              <Box area="name">
                <SmallText color="grays.0" mb={1}>
                  {product.brandName}
                </SmallText>
                <Name>{product.name}</Name>
              </Box>

              {isPresent(product.thumbnails) &&
                (isPresent(product.thumbnails.dpr1) ||
                  isPresent(product.thumbnails.amazon)) && (
                  <SquareBox area="image" p={4}>
                    <ProductImage
                      images={product.thumbnails}
                      alt={`Photo of ${product.brandName} ${product.name}`}
                    />
                  </SquareBox>
                )}

              {isPresent(product.ingredients) && (
                <Box
                  area="details"
                  onClickCapture={this.toggleIngredients}
                  onMouseEnter={this.showIngredients}
                  onMouseLeave={this.hideIngredients}
                  alignSelf="flex-end"
                  justifySelf="flex-start"
                  style={{cursor: 'help'}}
                  p="1rem"
                  m="-1rem"
                >
                  <IngredientsIcon />
                  <span className="screen-reader-text">Toggle ingredient list</span>
                </Box>
              )}

              {isPresent(product.bestPrice) && (
                <Text
                  area="price"
                  color="greenDark"
                  justifySelf="flex-end"
                  alignSelf="flex-end"
                  lineHeight="1.7ex"
                >
                  {USD(product.bestPrice)}
                </Text>
              )}
            </OfferGrid>
          </Box>
        </Link>
      </Card>
    )
  }
}

const ProductPreview = (props: Props) => {
  if (props.product.hasOffers) {
    return <OfferPreview {...props} />
  } else {
    return <SimplePreview {...props} />
  }
}

export default ProductPreview

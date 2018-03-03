// @flow
import * as React from 'react'
import isPresent from 'is-present'
import upperCaseFirst from 'upper-case-first'
import theme from '../theme'
import Grid from '../components/Grid'
import Box from '../components/Box'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Text from '../components/Text'
import SmallText from '../components/SmallText'
import Image from '../components/Image'
import {IngredientsIcon} from './Icons'

const sentenceCase = s => upperCaseFirst(s.toLowerCase())

import currency from 'currency.js'
const USD = value => currency(value, {symbol: '$', precision: 2}).format(true)

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
  transition: all 0.15s ease;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
  border-radius: ${theme.space[2]};
  padding: ${theme.space[3]};
  height: 100%;
  /*z-index: 0;*/

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
  grid-gap: ${theme.space[1]};
`

type Props = {
  product: Object,
}

const SimplePreview = ({product, ...props}: Props) => (
  <Card
    width="100%"
    style={{
      gridColumn: 'span var(--productColumns)',
      maxWidth: theme.space[10],
      margin: 'auto',
    }}
    {...props}
  >
    <SimpleGrid>
      <SmallText area="brand" color="grays.0">
        {product.brandName}
      </SmallText>
      <Name area="name">{product.name}</Name>
      <Button
        area="find"
        alignSelf="center"
        onClick={() => handleIntercomMessage(product)}
      >
        Where to Buy
      </Button>
    </SimpleGrid>
  </Card>
)

const OfferGrid = Grid.extend`
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'name   name'
    'image  image'
    'details price';
`

const SquareWrapper = Box.extend`
  display: block;
  height: 0;
  width: 100%;
  position: relative;
  padding-bottom: 100%;
`
const SquareBox = ({children, ...props}: {children: any}) => (
  <Box style={{display: 'block'}} {...props}>
    <SquareWrapper>
      <Box position="absolute" style={{top: 0, bottom: 0, left: 0, right: 0}} p={4}>
        {children}
      </Box>
    </SquareWrapper>
  </Box>
)

const ProductImage = Image.extend`
  object-fit: contain;
  justify-self: center;
  width: 100%;
  height: 100%;
`

const IngredientsCard = Box.extend`
  background: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: ${theme.space[3]};
`
const IngredientText = Text.extend`
  padding-left: ${theme.space[4]};
  text-indent: -${theme.space[4]};

  &:before {
    content: '· ';
  }
`

const IngredientList = ({ingredients}: {ingredients: string}) => {
  const list = ingredients
    .split(/,(?=[^)]*(?:\(|$))/g)
    .map(each => sentenceCase(each.trim()))
    .map(each => (
      <IngredientText mt={1} key={each}>
        {each}
      </IngredientText>
    ))

  return (
    <IngredientsCard>
      <Name mb={2}>Ingredients</Name>
      {list}
    </IngredientsCard>
  )
}

type State = {
  showIngredients: boolean,
}
class OfferPreview extends React.Component<Props, State> {
  state = {
    showIngredients: false,
  }

  toggleIngredients = event => {
    event.preventDefault()
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
    return (
      <Card
        position="relative"
        {...props}
        style={{zIndex: this.state.showIngredients ? 1 : 0}}
      >
        {this.state.showIngredients && (
          <IngredientList ingredients={product.ingredients} />
        )}

        <Box
          is="a"
          href={
            product.brandWhereToBuyUrl
              ? product.brandWhereToBuyUrl
              : '/link/offer/' + product.offers[0].id
          }
          target="_blank"
          rel={product.brandWhereToBuyUrl ? 'noopener' : 'nofollow noopener'}
          height="100%"
          bg="white"
          style={{zIndex: 0}}
        >
          <OfferGrid>
            <Box area="name">
              <SmallText color="grays.0" mb={1}>
                {product.brandName}
              </SmallText>
              <Name>{product.name}</Name>
            </Box>

            {isPresent(product.image) && (
              <SquareBox area="image">
                <ProductImage src={product.image} />
              </SquareBox>
            )}

            {isPresent(product.ingredients) && (
              <Box
                area="details"
                alignSelf="flex-end"
                style={{cursor: 'initial'}}
                onClickCapture={this.toggleIngredients}
                onMouseEnter={this.showIngredients}
                onMouseLeave={this.hideIngredients}
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

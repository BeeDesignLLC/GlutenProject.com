// @flow
import * as React from 'react'
import Box from '../components/Box'
import HugeHeading from '../components/HugeHeading'
import Heading from '../components/Heading'
import LargeText from '../components/LargeText'
import Text from '../components/Text'
import Link from 'next/link'
import A from '../components/A'
import {urlForQuery} from '../utils/misc'
import Mailchimp from '../components/Mailchimp'

type Props = {}
export default class extends React.Component<Props> {
  render() {
    const {...props} = this.props
    return (
      <React.Fragment>
        <Box area="main" flexDirection="column" {...props}>
          <Heading
            is="h1"
            fontSize={[4, 3]}
            fontStyle="italic"
            mt={3}
            color="black"
            className="mobile-hide"
          >
            Find All Certified Gluten-Free Products
          </Heading>
          <LargeText>
            The Gluten Project is the first place in the world to easily search the entire
            list of certified gluten-free products and the places to buy them.
          </LargeText>
          <LargeText is="ul" mt={4}>
            <li>
              Products&rsquo; gluten-free certification valid as of{' '}
              <strong>January 2017</strong> or later
            </li>
            <li>Other gluten-free certifications coming soon!</li>
            <li>
              We built this to solve our own frustration of finding certified GF products
              for Evelyn who has undiagnosed Celiac disease
            </li>
          </LargeText>
          <Text mt={4}>
            <strong>Warning:</strong> Before consuming, ensure the product label contains
            the gluten-free certification logo
          </Text>

          <Mailchimp mt={[6, 5]} />

          <Heading is="h2" mt={[6, 5]} fontSize={[4, 3]} fontStyle="italic" color="black">
            Popular Product Searches
          </Heading>
          <LargeText textAlign={['center', 'left']}>
            {[
              'Cereal',
              'Granola',
              'Chocolate',
              'Coffee',
              'Cookies',
              'Flour',
              'Jerky',
              'Nuts',
              'Oatmeal',
              'Oats',
              'Pasta',
              'Pizza',
              'Pizza dough',
              'Probiotics',
              'Protein powder',
              'Sausage',
              'Snacks',
              'Spices',
              'Tea',
              'Vitamins',
              'Wine',
              'Beer',
              'Cosmetics',
            ].map(item => (
              <React.Fragment key={item}>
                <Link
                  passHref
                  href={`/search?q=${item.toLowerCase()}`}
                  as={urlForQuery(item)}
                >
                  <A color="greenDark">Gluten-free {item}</A>
                </Link>
                <br />
              </React.Fragment>
            ))}
          </LargeText>
        </Box>

        <HugeHeading is="h2">The Gluten Project</HugeHeading>
      </React.Fragment>
    )
  }
}

// @flow
import * as React from 'react'
import Box from '../components/Box'
import HugeHeading from '../components/HugeHeading'
import ArticleHeading from '../components/ArticleHeading'
import LargeText from '../components/LargeText'
import LargeTextList from '../components/LargeTextList'
import Link from '../components/Link'
import Anchor from '../components/Anchor'
import {urlForQuery} from '../utils/misc'
import Mailchimp from '../components/Mailchimp'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    const {...props} = this.props
    return (
      <React.Fragment>
        <Box area="main" flexDirection="column" {...props}>
          <ArticleHeading tag="h1" className="mobile-hide">
            Find All Certified Gluten Free Products
          </ArticleHeading>
          <LargeText>
            The Gluten Project is the first and only place to find the entire list of
            certified gluten free products.{' '}
          </LargeText>
          <LargeTextList mt={4}>
            <li>
              Everything certified by the{' '}
              <Anchor href="http://www.gfco.org" target="_blank">
                Gluten-Free Certification Organization
              </Anchor>{' '}
              (GFCO) as of <strong>January 2017</strong>
            </li>
            <li>
              Built to make it easy for us to find and buy certified GF products for
              Evelyn who has (undiagnosed) Celiac disease
            </li>
            <li>
              <strong>Warning:</strong> products can drop certification at any time.
              Before consuming, ensure the product label contains the GFCO certification
              logo
            </li>
          </LargeTextList>

          <Mailchimp mt={[6, 5]} />

          <ArticleHeading mt={[6, 5]}>Popular Product Searches</ArticleHeading>
          <Box flexDirection="column" fontSize={2} align={['center', 'left']}>
            {[
              'Cereal',
              'Chocolate',
              'Coffee',
              'Flour',
              'Nuts',
              'Oatmeal',
              'Oats',
              'Pasta',
              'Pizza',
              'Pizza dough',
              'Probiotics',
              'Protein powder',
              'Sausage',
              'Spices',
              'Tea',
              'Vitamins',
              'Wine',
              'Beer',
            ].map(item => (
              <Link
                href={`/search?q=${item.toLowerCase()}`}
                as={urlForQuery(item)}
                key={item}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>

        <HugeHeading tag="h2">The Gluten Project</HugeHeading>
      </React.Fragment>
    )
  }
}

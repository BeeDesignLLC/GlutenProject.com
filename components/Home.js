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

type Props = {}

export default class extends React.Component<Props> {
  render() {
    const {...props} = this.props
    return (
      <React.Fragment>
        <Box area="main" flexDirection="column" {...props}>
          <ArticleHeading tag="h1">
            Find All Certified Gluten Free Products
          </ArticleHeading>
          <LargeText>
            The Gluten Project is the first and only place you can find the entire list of
            certified gluten free products.{' '}
          </LargeText>
          <LargeTextList mt={4}>
            <li>
              Everything certified by the{' '}
              <Anchor href="http://www.gfco.org/" target="_blank">
                Gluten-Free Certification Organization
              </Anchor>{' '}
              (GFCO)
            </li>
            <li>Comprehensive list of all certified gluten free products</li>
            <li>
              Built to make it easy for us to find and buy certified GF products for
              Evelyn who has (undiagnosed) Celiac disease
            </li>
          </LargeTextList>

          <ArticleHeading mt={5}>Popular Product Searches</ArticleHeading>
          <Box flexDirection="column" fontSize={2}>
            {[
              'Nuts',
              'Coffee',
              'Oats',
              'Beer',
              'Wine',
              'Probiotics',
              'Vitamins',
              'Protein powder',
              'Spices',
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

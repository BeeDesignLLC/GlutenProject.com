// @flow
import * as React from 'react'
import Box from '../components/Box'
import HugeHeading from '../components/HugeHeading'
import ArticleHeading from '../components/ArticleHeading'
import LargeText from '../components/LargeText'
import LargeTextList from '../components/LargeTextList'
import Link from '../components/Link'
import Anchor from '../components/Anchor'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    const {...props} = this.props
    return (
      <React.Fragment>
        <HugeHeading>The Gluten Project</HugeHeading>

        <Box area="main" flexDirection="column" {...props}>
          <ArticleHeading>Find Any Certified Gluten Free Product</ArticleHeading>
          <LargeText>
            The Gluten Project is the first and only place to search through the entire
            list of certified gluten free products.{' '}
          </LargeText>
          <LargeTextList mt={4}>
            <li>
              Everything certified by the{' '}
              <Anchor href="http://www.gfco.org/" target="_blank">
                Gluten-Free Certification Organization
              </Anchor>{' '}
              (GFCO)
            </li>
            <li>Comprehensive list of all certified products</li>
            <li>
              Built to make it easy for us to find and buy certified GF products for
              Evelyn who has (undiagnosed) Celiac disease
            </li>
          </LargeTextList>

          <ArticleHeading mt={5}>Popular Searches</ArticleHeading>
          <Box flexDirection="column" fontSize={2}>
            <Link href="/" as="/certified-gluten-free-coffee">
              Coffee
            </Link>
            <Link href="/" as="/certified-gluten-free-oats">
              Oats
            </Link>
            <Link href="/" as="/certified-gluten-free-probiotics">
              Probiotics
            </Link>
            <Link href="/" as="/certified-gluten-free-vitamins">
              Vitamins
            </Link>
            <Link href="/" as="/certified-gluten-free-spices">
              Spices
            </Link>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}

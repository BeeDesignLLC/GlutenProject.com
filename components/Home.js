// @flow
import * as React from 'react'

import Box from '../components/Box'
import ArticleHeading from '../components/ArticleHeading'
import LargeText from '../components/LargeText'
import Link from '../components/Link'

type Props = {if: boolean}

export default class extends React.Component<Props> {
  static defaultProps = {
    if: true,
  }

  render() {
    const {...props} = this.props
    return (
      <Box area="main" flexDirection="column" {...props}>
        <ArticleHeading>Find any certified gluten free product</ArticleHeading>
        <LargeText>
          The Gluten Project is the first and only place to search through the entire list
          of certified gluten free products.{' '}
        </LargeText>
        <LargeText>
          This project is for you, so please tell us what is not working, what you need,
          and what you want!
        </LargeText>

        <ArticleHeading>Popular Searches</ArticleHeading>
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
    )
  }
}

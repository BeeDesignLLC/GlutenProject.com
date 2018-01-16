// @flow
import * as React from 'react'

import Layout from '../components/Layout'
import PageHeading from '../components/PageHeading'
import ArticleHeading from '../components/ArticleHeading'
import SectionHeading from '../components/SectionHeading'
import LargeText from '../components/LargeText'
import Text from '../components/Text'
import SecondaryText from '../components/SecondaryText'
import CaptionText from '../components/CaptionText'
import Link from '../components/Link'

type Props = {
  userAgent: string,
}
type State = {}

export default class extends React.Component<Props, State> {
  static async getInitialProps({req}: {req: any}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {userAgent}
  }

  render() {
    return (
      <Layout>
        <PageHeading>35k Certified Gluten Free Products</PageHeading>
        <ArticleHeading>Find any certified gluten free product</ArticleHeading>
        <SectionHeading ml={1}>Help a friend?</SectionHeading>
        <LargeText ml={2}>
          The Gluten Project is the first and only place to search through the entire list
          of certified gluten free products. This project is for you, so please tell us
          what is not working, what you need, and what you want!
        </LargeText>
        <Text ml={3}>
          The Gluten Project is the first and only place to search through the entire list
          of certified gluten free products. This project is for you, so please{' '}
          <Link href="/home">tell us</Link> what is not working, what you need, and what
          you want!
        </Text>
        <SecondaryText ml={4}>
          The Gluten Project is the first and only place to search through the entire list
          of certified gluten free products. This project is for you, so please tell us
          what is not working, what you need, and what you want!
        </SecondaryText>
        <CaptionText ml={4}>53 results</CaptionText>
      </Layout>
    )
  }
}

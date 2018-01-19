// @flow
import * as React from 'react'
import Head from 'next/head'
import {withRouter} from 'next/router'
import {connectStateResults} from 'react-instantsearch/connectors'
import titleize from 'titleize'
import Grid from './Grid'
import {Nav, Aside} from '../components/Box'
import PageHeading from '../components/PageHeading'
import SectionHeading from '../components/SectionHeading'
import SearchInput from '../components/SearchInput'
import SecondaryText from '../components/SecondaryText'
import Link from './Link'

type Props = {
  children?: React.Node,
  title?: string,
  router: Object,
  searchState: Object,
  searchResults: Object,
}

class Page extends React.Component<Props> {
  render() {
    const {
      children,
      title = 'List of 35k Certified Gluten Free Products | The Gluten Project',
      router,
      searchState,
    } = this.props
    const {ssrSearchQuery} = router.query

    let gridAreas
    if (ssrSearchQuery) {
      gridAreas = [
        'head head    search  search  info info',
        '.    heading heading heading .    menu',
        'main main    main    main    main aside',
      ]
    } else if (searchState.query) {
      gridAreas = [
        'head head search search info info',
        'main main main   main   main menu',
        'main main main   main   main aside',
      ]
    } else {
      gridAreas = [
        'head head search search info info',
        '.    main main   main   .    menu',
        '.    main main   main   .    aside',
      ]
    }

    return (
      <Grid
        columns={6}
        rows="7.5rem auto 1fr"
        gap="1.5rem"
        rowGap="4rem"
        p={4}
        areas={gridAreas}
        className="fullscreen"
      >
        <Head>
          <title>
            {searchState.query
              ? `Certified Gluten Free ${titleize(
                  searchState.query
                )} | The Gluten Project`
              : title}
          </title>
        </Head>

        {children}

        <SearchInput area="search" alignSelf="flex-end" />

        <PageHeading
          tag="h2"
          area="head"
          alignSelf="flex-end"
          style={{cursor: 'pointer'}}
          onClick={() => this.props.router.push('/')}
        >
          35k Certified<br />Gluten Free Products
        </PageHeading>

        <SecondaryText area="info" align="right">
          The Gluten Project is the first and only place to search through the entire list
          of certified gluten free products. All products are certified by the{' '}
          <Link href="http://www.gfco.org/">Gluten-Free Certification Organization</Link>{' '}
          as of January 2017.
        </SecondaryText>

        <Nav area="menu" flexDirection="column">
          <Link menu href="/">
            home
          </Link>
          <Link menu href="/manifesto">
            manifesto
          </Link>
          <Link menu href="/who">
            who&rsquo;s behind this
          </Link>
          <Link menu href="#">
            get help
          </Link>
        </Nav>

        <Aside area="aside" flexDirection="column" flex={1}>
          <SectionHeading>Have an opinion?</SectionHeading>
          <SecondaryText>
            Your feedback determines what we do next to improve this site.<br />
          </SecondaryText>
          <SecondaryText>
            <Link href="#">Send feedback to Brandon</Link>
          </SecondaryText>

          <SectionHeading>Thankful?</SectionHeading>
          <SecondaryText>
            You may know two or three people who would love this site. Could you do us a
            favor and tell them about it?
          </SecondaryText>
        </Aside>
      </Grid>
    )
  }
}

export default withRouter(connectStateResults(Page))

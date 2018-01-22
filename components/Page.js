// @flow
import * as React from 'react'
import Head from 'next/head'
import {withRouter} from 'next/router'
import {connectStateResults} from 'react-instantsearch/connectors'
import titleize from 'titleize'
import Grid from './Grid'
import {Nav, Aside} from '../components/Box'
import Logo from '../components/Logo'
import PageHeading from '../components/PageHeading'
import SectionHeading from '../components/SectionHeading'
import SearchInput from '../components/SearchInput'
import SecondaryText from '../components/SecondaryText'
import Link from './Link'
import {AnchorButton} from './Anchor'
import theme from '../theme'

const MasterGrid = Grid.extend`
  grid-row-gap: ${theme.space[5]};

  @media (min-height: 800px) {
    grid-row-gap: ${theme.space[6]};
  }
`

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
      title = 'List of 35,000 Certified Gluten Free Products | The Gluten Project',
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
      <MasterGrid
        columns={6}
        rows="7.5rem auto 1fr"
        gap={theme.space[4]}
        p={[3, 3, 4]}
        areas={gridAreas}
        className="fullscreen"
        m="auto"
        style={{maxWidth: '100rem'}}
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

        <PageHeading
          area="head"
          alignSelf="flex-end"
          style={{cursor: 'pointer'}}
          onClick={() => this.props.router.push('/')}
        >
          35k Certified<br />Gluten Free Products
        </PageHeading>

        <SearchInput area="search" alignSelf="flex-end" />

        <SecondaryText area="info" align="right" justifySelf="flex-end">
          The Gluten Project is the first and only place to search through the entire list
          of certified gluten free products. All products are certified by the{' '}
          <Link href="http://www.gfco.org/">Gluten-Free Certification Organization</Link>{' '}
          as of January 2017.
        </SecondaryText>

        <Nav area="menu" flexDirection="column">
          <Link menu href="/">
            home
          </Link>
          <Link menu href="/manifesto" mt={2}>
            manifesto
          </Link>
          <Link menu href="/who" mt={2}>
            who&rsquo;s behind this
          </Link>
          <AnchorButton menu onClick={() => window.Intercom('showNewMessage')} mt={2}>
            ask a question
          </AnchorButton>
        </Nav>

        <Aside area="aside" flexDirection="column" flex={1}>
          <SectionHeading>Have an opinion?</SectionHeading>
          <SecondaryText>
            Your feedback determines what we do next to improve this site.<br />
          </SecondaryText>
          <SecondaryText>
            <AnchorButton
              inheritContext
              onClick={() => window.Intercom('showNewMessage')}
            >
              Send feedback to Brandon
            </AnchorButton>
          </SecondaryText>

          <SectionHeading mt={5}>Thankful?</SectionHeading>
          <SecondaryText mb={4}>
            You can best show your support by telling others about The Gluten Project.
          </SecondaryText>
          {/* <SecondaryText> */}
          {/*   You may know two or three people who would love this site. Could you do us a */}
          {/*   favor and tell them about it? */}
          {/* </SecondaryText> */}

          <Logo mt="auto" mb={0} />
        </Aside>
      </MasterGrid>
    )
  }
}

export default withRouter(connectStateResults(Page))

// @flow
import * as React from 'react'
import Head from 'next/head'
import {withRouter} from 'next/router'
import {connectStateResults} from 'react-instantsearch/connectors'
import titleize from 'titleize'
import Grid from './Grid'
import Box, {Nav, Aside} from '../components/Box'
import Logo from '../components/Logo'
import PageHeading from '../components/PageHeading'
import SectionHeading from '../components/SectionHeading'
import SearchInput from '../components/SearchInput'
import SecondaryText from '../components/SecondaryText'
import Link from './Link'
import Anchor from './Anchor'
import {AnchorButton} from './Anchor'
import {HomeIcon, ManifestoIcon, WhoIcon, HelpIcon} from './Icons'
import theme from '../theme'
import Mailchimp from './Mailchimp'

const getSmallScreenAreas = ({home, ssrQuery}) => {
  if (home) {
    return `
    'search'
    'head'
    'main'
    'info'
    'menu'
    'aside'
	`
  } else if (ssrQuery) {
    return `
    'search'
    'heading'
    'main'
    'info'
    'menu'
    'aside'
	`
  } else {
    return `
    'search'
    'main'
    'info'
    'menu'
    'aside'
	`
  }
}

const getMediumScreenAreas = ({home, ssrQuery}) => {
  if (ssrQuery) {
    return `
      'head search info'
      'heading heading   menu'
      'main    main    aside'
	`
  } else if (home) {
    return `
      'head search info'
      'main main    menu'
      'main main    aside'
	`
  } else {
    return `
      'head search info'
      'main main    menu'
      'main main    aside'
	`
  }
}
const getLargeScreenAreas = ({ssrQuery, searching}) => {
  if (ssrQuery) {
    return `
      'head head    search  search  info info'
      '.    heading heading heading .    menu'
      'main main    main    main    main aside'
	`
  } else if (searching) {
    return `
      'head head search search info info'
      'main main main   main   main menu'
      'main main main   main   main aside'
	`
  } else {
    return `
      'head head search search info info'
      '.    main main   main   .    menu'
      '.    main main   main   .    aside'
	`
  }
}

const MasterGrid = Grid.extend`
  max-width: 100rem;
  grid-gap: ${theme.space[6]};
  grid-template-areas: ${getSmallScreenAreas};

  @media (min-width: ${theme.breakpoints[0]}) {
    grid-template-areas: ${getMediumScreenAreas};
    grid-template-columns: 1fr 1fr minmax(auto, 13rem);
    grid-template-rows: 7.5rem auto 1fr;
    grid-gap: ${theme.space[4]};
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    grid-template-areas: ${getLargeScreenAreas};
    grid-template-columns: repeat(5, 1fr) minmax(13rem, 1fr);
  }

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
    const {children, title = 'The Gluten Project', router, searchState} = this.props

    const htmlTitle = searchState.query
      ? `List of All Certified Gluten Free ${titleize(
          searchState.query
        )} | The Gluten Project`
      : title
    const socialTitle = searchState.query
      ? `List of All Certified Gluten Free ${titleize(searchState.query)}`
      : 'Find All Certified Gluten Free Products'

    return (
      <MasterGrid
        columns={null}
        ssrQuery={router.query.ssr}
        home={router.pathname === '/'}
        searching={router.pathname === '/search'}
        p={[3, 3, 4]}
        m="auto"
        className="fullscreen"
      >
        <Head>
          <title>{htmlTitle}</title>
          <meta property="og:title" content={socialTitle} />
          <meta name="twitter:title" content={socialTitle} />
        </Head>

        {children}

        <PageHeading
          area="head"
          alignSelf="flex-end"
          style={{cursor: 'pointer'}}
          onClick={() => router.push('/')}
          className={router.pathname === '/' ? null : 'mobile-hide'}
          mt={[4, 0]}
        >
          35k Certified<br />Gluten Free Products
        </PageHeading>

        <SearchInput area="search" alignSelf="flex-end" />

        <Aside area="info" justifySelf="flex-end" align={['center', 'right']} px={[4, 0]}>
          <SecondaryText align={['center', 'right']}>
            All products are certified by the{' '}
            <Anchor href="http://www.gfco.org/" target="_blank">
              Gluten-Free Certification Organization
            </Anchor>{' '}
            as of January 2017.
          </SecondaryText>
        </Aside>

        <Nav
          area="menu"
          flexDirection="column"
          align={['center', 'flex-start']}
          my={[4, 0]}
        >
          <Box align="flex-start">
            <Link menu href="/">
              <HomeIcon />
              <span>home</span>
            </Link>
            <Link menu href="/manifesto" mt={4}>
              <ManifestoIcon />
              <span>manifesto</span>
            </Link>
            <Link menu href="/who" mt={4}>
              <WhoIcon />
              <span>who&rsquo;s behind this</span>
            </Link>
            <AnchorButton menu onClick={() => window.Intercom('showNewMessage')} mt={4}>
              <HelpIcon />
              <span>get help</span>
            </AnchorButton>
          </Box>
        </Nav>

        <Aside area="aside" flexDirection="column" align={['center', 'left']} px={[4, 0]}>
          <SectionHeading>Have an opinion?</SectionHeading>
          <SecondaryText align={['center', 'left']}>
            You have great ideas on how to make this site better, and we want to hear
            them!<br />
          </SecondaryText>
          <SecondaryText align={['center', 'left']}>
            <AnchorButton
              inheritContext
              onClick={() => window.Intercom('showNewMessage')}
            >
              Send feedback to Brandon
            </AnchorButton>
          </SecondaryText>

          <SectionHeading mt={5}>Thankful?</SectionHeading>
          <SecondaryText mb={4} align={['center', 'left']}>
            Show your appreciation by telling others about The Gluten Project!
          </SecondaryText>

          <Logo mt={[6]} mx={['auto', 0]} mb={[4, 0]} />

          <Mailchimp className="mobile-show" my={[6, 5]} />
        </Aside>
      </MasterGrid>
    )
  }
}

export default withRouter(connectStateResults(Page))

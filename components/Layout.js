// @flow
import * as React from 'react'
import Head from 'next/head'
import {withRouter} from 'next/router'
import {connectStateResults} from 'react-instantsearch/connectors'
import titleize from 'title'
import Box, {Nav, Aside} from '../components/Box'
import Logo from '../components/Logo'
import PageHeading from '../components/PageHeading'
import Heading from '../components/Heading'
import SearchBox from '../components/SearchBox'
import SecondaryText from '../components/SecondaryText'
import Link from 'next/link'
import A from './A'
import {HomeIcon, ManifestoIcon, WhoIcon, HelpIcon} from './Icons'
import Mailchimp from './Mailchimp'
import ShareButtons from './ShareButtons'
import MasterGrid from './MasterGrid'

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
      title = 'The Gluten Project',
      router,
      searchState,
      searchResults,
    } = this.props

    const htmlTitle = searchState.query
      ? `${searchResults && searchResults.nbHits} Certified Gluten-Free ${titleize(
          searchState.query
        )} (safe for Celiac) | The Gluten Project`
      : title
    const socialTitle = searchState.query
      ? `${searchResults && searchResults.nbHits} Certified Gluten-Free ${titleize(
          searchState.query
        )} (safe for Celiac)`
      : 'Find All Certified Gluten-Free Products'

    return (
      <MasterGrid
        columns={null}
        ssr={router.query.ssr}
        path={router.pathname}
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

        <SearchBox area="search" alignSelf="flex-end" />

        <Link href="/">
          <PageHeading
            area="head"
            alignSelf="flex-end"
            style={{cursor: 'pointer'}}
            className={router.pathname === '/' ? null : 'mobile-hide'}
            mt={[4, 0]}
          >
            35k Certified<br />Gluten-Free Products
          </PageHeading>
        </Link>

        <Aside
          area="blurb"
          justifySelf="flex-end"
          alignItems={['center', 'flex-end']}
          px={[4, 0]}
        >
          <SecondaryText fontStyle="normal" textAlign={['center', 'right']}>
            We are not endorsed by, authorized, or in any way officially connected with
            the{' '}
            <A href="http://www.gluten.org" target="_blank" rel="noopener">
              Gluten Intolerance Group
            </A>{' '}
            or the{' '}
            <A href="http://www.gfco.org/" target="_blank" rel="noopener">
              Gluten-Free Certification Organization
            </A>.
          </SecondaryText>
        </Aside>

        <Nav
          area="menu"
          flexDirection="column"
          alignItems={['center', 'flex-start']}
          my={[4, 0]}
        >
          <Box alignItems="flex-start">
            <Link href="/" passHref prefetch>
              <A menu>
                <HomeIcon />
                <span>home</span>
              </A>
            </Link>
            <Link href="/manifesto" passHref prefetch>
              <A menu mt={4}>
                <ManifestoIcon />
                <span>manifesto</span>
              </A>
            </Link>
            <Link href="/who" passHref prefetch>
              <A menu mt={4}>
                <WhoIcon />
                <span>who&rsquo;s behind this</span>
              </A>
            </Link>
            <A
              menu
              is="button"
              onClick={() => {
                if (window.Intercom) {
                  window.Intercom('showNewMessage')
                } else {
                  alert(
                    'It seems Intercom is being blocked by one of your browser extensions. Whitelist Intercom to chat with us :)'
                  )
                }
              }}
              mt={4}
            >
              <HelpIcon />
              <span>get help</span>
            </A>
          </Box>
        </Nav>

        <Aside
          area="aside"
          flexDirection="column"
          textAlign={['center', 'left']}
          px={[4, 0]}
          mb={4}
        >
          <Heading>Thankful?</Heading>
          <SecondaryText>
            Show your appreciation by telling others about The Gluten Project!
          </SecondaryText>
          <ShareButtons mt={3} justifyContent={['center', 'flex-start']} />

          <Heading mt={5}>Have an opinion?</Heading>
          <SecondaryText>
            You have great ideas on how to make this site better, and we want to hear
            them!<br />
          </SecondaryText>
          <SecondaryText>
            <A
              is="button"
              onClick={() => {
                if (window.Intercom) {
                  window.Intercom('showNewMessage')
                } else {
                  alert(
                    'It seems Intercom is being blocked by one of your browser extensions. Whitelist Intercom to chat with us :)'
                  )
                }
              }}
            >
              Send feedback to Brandon
            </A>
          </SecondaryText>

          <Logo mt={[7]} mx={['auto', 0]} mb={[4, 0]} />

          <SecondaryText my={[2, 4]}>
            Man cannot live by (gluten-free) bread alone, but by every word that comes
            from the mouth of God.
          </SecondaryText>

          <Mailchimp className="mobile-show" my={5} />

          <Heading mt={4}>Disclaimers</Heading>
          <SecondaryText>
            We are affilates of Thrive Market, Nuts.com, and Walmart and earn commissions
            from links to their products. This ensures The Gluten Project will be
            sustainable over the long term. Thank you for using them! :)
          </SecondaryText>
          <SecondaryText>
            We are a participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for us to earn fees
            by linking to Amazon.com and affiliated sites.
          </SecondaryText>
          <SecondaryText mt={3} mb={4}>
            The Gluten Project and Bee Design LLC do not accept any responsibility or
            liability for the accuracy, content, completeness, legality, or reliability of
            the information contained on this website. No warranties, promises and/or
            representations of any kind, expressed or implied, are given as to the nature,
            standard, accuracy or otherwise of the information provided in this website
            nor to the suitability or otherwise of the information to your particular
            circumstances.
          </SecondaryText>

          <Link href="/disclaimer" passHref>
            <A>Legal</A>
          </Link>
          <Link href="/privacy" passHref>
            <A>Privacy Policy</A>
          </Link>
          <A href="https://github.com/BeeDesignLLC/GlutenProject.com">Source Code</A>
        </Aside>
      </MasterGrid>
    )
  }
}

export default withRouter(connectStateResults(Page))

// @flow
import * as React from 'react'
import Head from 'next/head'
import {ThemeProvider} from 'styled-components'
import Grid from './Grid'
import Box from '../components/Box'
import SearchBoss from './SearchBoss'
import PageHeading from '../components/PageHeading'
import SectionHeading from '../components/SectionHeading'
import SearchInput from '../components/SearchInput'
import SecondaryText from '../components/SecondaryText'
import Link from './Link'

// Prenton X Height
// const xHeight = 7.97px  -> approx 1/2 em

const scale = (base, scalar, length = 7) =>
  Array(length)
    .fill(base)
    .map((x, i) => x * Math.pow(scalar, i))

const desktopFontSizes = scale(1.4, 1.3).map(x => `${x}ex`)
// const mobileFontSizes = scale(1.3, 1.3).map(x => `${x}ex`)

const theme = {
  // breakpoints: [
  //   32, 48, 64
  // ],
  // This makes a fibonacci sequences with 1ex, but replaces 1ex with 0.5rem so local font-size doesn't affect it.
  space: [0, '0.25rem', '0.5rem', '1rem', '1.5rem', '2.5rem', '4rem', '7.5rem'],
  fontSizes: desktopFontSizes,
  colors: {
    green: '#009B72',
    greenDark: '#007B5B',
    greenLight: '#C5E8DF',
    grays: ['#1E1E1E', '#383D41', '#555E68', '#888F96', '#BFC2C6'],
    offwhite: '#F9F9F9',
  },
}

type Props = {
  children?: React.Node,
  title?: string,
}

export default ({children, title = 'The Gluten Project'}: Props) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <SearchBoss>
        <Grid
          columns="[results-start] repeat(5, 1fr) [results-end] 1fr"
          rows="7.5rem [results-start] 1fr 1fr [results-end]"
          gap="1.5rem"
          rowGap="4rem"
          m={4}
          areas={[
            'head head search search info info',
            '.    main main   main   .    menu',
            '.    main main   main   .    aside',
          ]}
        >
          {children}

          <SearchInput area="search" alignSelf="flex-end" />

          <PageHeading tag="h2" area="head" alignSelf="flex-end">
            35k Certified<br />Gluten Free Products
          </PageHeading>

          <SecondaryText area="info" align="right">
            Here at The Gluten Project we’re on a mission to unearth every certified
            gluten free product in the world. All products currently listed are certified
            by the{' '}
            <Link href="http://www.gfco.org/">
              Gluten-Free Certification Organization
            </Link>{' '}
            as of January 2017.
          </SecondaryText>

          <Box area="menu" tag="nav" flexDirection="column">
            <Link menu href="/manifesto">
              manifesto
            </Link>
            <Link menu href="/who">
              who&rsquo;s behind this
            </Link>
            <Link menu href="#">
              send feedback
            </Link>
            <Link menu href="#">
              get help
            </Link>
          </Box>

          <Box area="aside" tag="aside" flexDirection="column">
            <SectionHeading>Help a friend?</SectionHeading>
            <SecondaryText>
              Do you know 2 or 3 people who would like to know about this site?
            </SecondaryText>

            <SecondaryText>
              More users enables us to spend more time making this better for the gluten
              free community.
            </SecondaryText>

            <SecondaryText>Thank you for helping spread the word!</SecondaryText>
          </Box>
        </Grid>
      </SearchBoss>
    </React.Fragment>
  </ThemeProvider>
)

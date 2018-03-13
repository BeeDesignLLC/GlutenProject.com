// @flow
import Grid from './Grid'
import theme from '../theme'

const getSmallScreenAreas = ({ssr, path}) => {
  switch (path) {
    case '/':
      return `
        'search'
        'head'
        'main'
        'info'
        'menu'
        'aside'
      `
    case '/search':
      if (ssr) {
        return `
          'search'
          'heading'
          'main'
          'info'
          'menu'
          'aside'
        `
      } // else fallthrough  - eslint-disable-next-line no-fallthrough
    default:
      return `
        'search'
        'main'
        'info'
        'menu'
        'aside'
      `
  }
}
const getMediumScreenAreas = ({ssr, path}) => {
  switch (path) {
    case '/search':
      if (ssr) {
        return `
          'head search info'
          'heading heading   menu'
          'main    main    aside'
        `
      } // else fallthrough  - eslint-disable-next-line no-fallthrough
    default:
      return `
        'head search info'
        'main main    menu'
        'main main    aside'
      `
  }
}
const getLargeScreenAreas = ({ssr, path}) => {
  switch (path) {
    case '/search':
      if (ssr) {
        return `
          'head head    search  search  info info'
          '.    heading heading heading .    menu'
          'main main    main    main    main aside'
        `
      } // else fallthrough  - eslint-disable-next-line no-fallthrough
    case '/product':
      return `
        'head head search search info info'
        'main main main   main   main menu'
        'main main main   main   main aside'
      `
    default:
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

export default MasterGrid

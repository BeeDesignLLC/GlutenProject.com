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
        'blurb'
        'menu'
        'aside'
      `
    case '/search':
      if (ssr) {
        return `
          'search'
          'heading'
          'main'
          'blurb'
          'menu'
          'aside'
        `
      } // else fallthrough  - eslint-disable-next-line no-fallthrough
    default:
      return `
        'search'
        'main'
        'blurb'
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
          'head search blurb'
          'heading heading   menu'
          'main    main    aside'
        `
      } // else fallthrough  - eslint-disable-next-line no-fallthrough
    default:
      return `
        'head search blurb'
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
          'head head    search  search  blurb blurb'
          '.    heading heading heading .    menu'
          'main main    main    main    main aside'
        `
      } else {
        return `
          'head head search search blurb blurb'
          'main main main   main   main menu'
          'main main main   main   main aside'
        `
      }
    case '/product':
      return `
        'head head head search search search search . blurb blurb blurb blurb'
        'info info info image  image  image image  links links links menu menu'
        'info info info image  image  image image  links links links aside aside'
        'info info info review review review review review review review aside aside'
      `
    default:
      return `
        'head head search search blurb blurb'
        '.    main main   main   .    menu'
        '.    main main   main   .    aside'
      `
  }
}

const MasterGrid = Grid.extend`
  max-width: 103rem;
  grid-gap: ${theme.space[6]};
  grid-template-areas: ${getSmallScreenAreas};

  @media (min-width: ${theme.breakpoints[0]}) {
    grid-template-areas: ${getMediumScreenAreas};
    grid-template-columns: 1fr 1fr minmax(auto, 13rem);
    grid-template-rows: 7.5rem auto auto;
    grid-auto-rows: 1fr;
    grid-gap: ${theme.space[4]};
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    grid-template-areas: ${getLargeScreenAreas};
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${theme.space[5]};
  }

  @media (min-height: 800px) {
    grid-row-gap: ${theme.space[6]};
  }
`

export default MasterGrid

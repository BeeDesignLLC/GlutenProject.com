// @flow
import Grid from './Grid'
import theme from '../theme'

const getSmallScreenAreas = ({ssr, path, landscape}) => {
  switch (path) {
    case '/':
      return `
        'search'
        'head'
        'main'
        '.'
        'blurb'
        '.'
        'menu'
        '.'
        'aside'
      `
    case '/product':
      if (landscape) {
        return `
          'search search '
          'name name '
          'image links'
          '. .'
          'info info'
          '. .'
          'review review'
          'disclaimer disclaimer'
          '. .'
          'blurb blurb'
          '. .'
          'menu menu'
          '. .'
          'aside aside'
        `
      } else {
        return `
          'search'
          'name'
          'image'
          'links'
          '.'
          'info'
          'review'
          'disclaimer'
          '.'
          'blurb'
          '.'
          'menu'
          '.'
          'aside'
        `
      }
    case '/search':
      if (ssr) {
        return `
          'search'
          'heading'
          'main'
          '.'
          'blurb'
          '.'
          'menu'
          '.'
          'aside'
        `
      } // else fallthrough  - eslint-disable-next-line no-fallthrough
    default:
      return `
        'search'
        'main'
        '.'
        'blurb'
        '.'
        'menu'
        '.'
        'aside'
      `
  }
}

const getSmallLandscapeScreenAreas = props =>
  getSmallScreenAreas({landscape: true, ...props})

const getMediumScreenAreas = ({ssr, path}) => {
  switch (path) {
    case '/product':
      return `
        'head head search search search blurb'
        'name name name name name   menu'
        'image image image links links    menu'
        'image image image links links    aside'
        'info info info info info    aside'
        'review review review review review    aside'
        'disclaimer disclaimer disclaimer  . .   aside'
      `
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
const getLargeScreenAreas = ({ssr, path, compressed}) => {
  switch (path) {
    case '/search':
      if (ssr) {
        return `
        'head head head search search search search . blurb blurb blurb blurb'
          '.    . heading heading heading heading heading heading .  .    menu menu'
          'main main    main    main    main main main main main main aside aside'
        `
      } else {
        return `
        'head head head search search search search . blurb blurb blurb blurb'
          'main main    main    main    main main main main main main menu menu'
          'main main    main    main    main main main main main main aside aside'
        `
      }
    case '/product':
      if (compressed) {
        return `
        'head head head search search search search . blurb blurb blurb blurb'
        'name name name name name  image image image image image menu menu'
        'info info info info info  image image image image image menu menu'
        'info info info info info  image image image image image aside aside'
        'info info info info info  links links links links links aside aside'
        'info info info info info  review review review review review aside aside'
        'disclaimer disclaimer disclaimer disclaimer disclaimer  review review review review review aside aside'
      `
      } else {
        return `
        'head head head search search search search . blurb blurb blurb blurb'
        'name name name image  image  image image  links links links menu menu'
        'info info info image  image  image image  links links links menu menu'
        'info info info image  image  image image  links links links aside aside'
        'info info info review review review review review review review aside aside'
        'info info info review review review review review review review aside aside'
        'disclaimer disclaimer disclaimer review review review review review review review aside aside'
      `
      }
    default:
      return `
        'head head head search search search search . blurb blurb blurb blurb'
          '. .    main    main    main main main main . . menu menu'
          '. .    main    main    main main main main . . aside aside'
      `
  }
}

const getProductOnlyStyles = props => {
  if (props.path !== '/product') return null

  return `
    @media (min-width: 41rem) and (max-width: ${theme.breakpoints[0]}) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: ${getSmallLandscapeScreenAreas(props)};
    }

    @media (min-width: ${theme.breakpoints[0]}) and (max-width: ${theme.breakpoints[1]}) {
      grid-template-columns: repeat(5, 1fr) minmax(auto, 1fr);
      grid-template-rows: 7.5rem auto auto auto auto;
    }
  `
}

const MasterGrid = Grid.extend`
  max-width: 103rem;
  grid-gap: ${theme.space[4]};
  grid-template-areas: ${getSmallScreenAreas};
  grid-template-rows: 2.5rem;

  @media (min-width: ${theme.breakpoints[0]}) {
    grid-template-areas: ${getMediumScreenAreas};
    grid-template-columns: 1fr 1fr minmax(auto, 13rem);
    grid-template-rows: 7.5rem auto auto;
    grid-auto-rows: 1fr;
    grid-gap: ${theme.space[5]};
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    grid-template-areas: ${props => getLargeScreenAreas({compressed: true, ...props})};
    grid-template-columns: repeat(10, 1fr) repeat(2, minmax(5rem, 1fr));
    grid-template-rows: ${props =>
      props.path === '/product'
        ? '7.5rem auto auto auto auto auto '
        : '7.5rem auto auto'};
    grid-gap: ${theme.space[5]};
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    grid-template-areas: ${getLargeScreenAreas};
    grid-template-rows: ${props =>
      props.path === '/product'
        ? '7.5rem minmax(0,auto) minmax(0,auto) minmax(0,auto) minmax(0,auto) minmax(0,auto)'
        : '7.5rem auto auto'};
  }

  @media (min-width: ${theme.breakpoints[1]}) and (min-height: 800px) {
    grid-row-gap: ${theme.space[6]};
  }

  ${getProductOnlyStyles};
`

export default MasterGrid

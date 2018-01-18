// Prenton X Height
// const xHeight = 7.97px  -> approx 1/2 em

const scale = (base, scalar, length = 7) =>
  Array(length)
    .fill(base)
    .map((x, i) => x * Math.pow(scalar, i))

const desktopFontSizes = scale(1.4, 1.3).map(x => `${x}ex`)
// const mobileFontSizes = scale(1.3, 1.3).map(x => `${x}ex`)

export default {
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
  lineHeights: ['3ex'],
}

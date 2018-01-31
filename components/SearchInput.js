// @flow
import * as React from 'react'
import {connectSearchBox, connectStateResults} from 'react-instantsearch/connectors'
import {withRouter} from 'next/router'
import styled from 'styled-components'
import {
  space,
  width,
  boxShadow,
  justifyContent,
  alignItems,
  alignSelf,
  theme,
} from 'styled-system'
import {gridArea} from '../utils/styled'
import Box from './Box'
import CaptionText from './CaptionText'

/* border: 2px ${theme('colors.greenDark2')} solid;*/

const Input = styled.input`
  background-color: ${theme('colors.greenDark')};
  border: 2px solid transparent;
  border-radius: 1.25rem;
  color: white;
  caret-color: currentColor;
  height: 2.5rem;
  /* Non-standard font size to prevent iOS zoom-on-focus */
  font-size: 16px;
  font-family: prenton, sans-serif;
  font-weight: 500;
  padding: 0 1rem 0 2.2rem;
  -webkit-tap-highlight-color: rgba(0,0,0,0);


  &::placeholder {
    color: white;
    font-style: italic;
    opacity: 1;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0.5;
    }
  }

  @media (min-width: ${theme('breakpoints.0')}) {
    background-color: ${theme('colors.greenLight')};
    color: black;
    font-size: ${theme('fontSizes.1')};

    &::placeholder {
      color: black;
    }
  }

  ${space}
  ${width}
  ${boxShadow}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridArea}
`

const Wrapper = Box.extend`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme('colors.green')};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: ${theme('space.2')} ${theme('space.2')};

  @media (min-width: ${theme('breakpoints.0')}) {
    align-self: flex-end;
    background: none;
    box-shadow: none;
    position: relative;
    padding: 0;
  }
`

const SearchForm = Box.withComponent('form').extend`
  position: relative;
`

const SearchIconButton = styled.button`
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23F9F9F9%22%20stroke%3D%22transparent%22%20stroke%2Dwidth%3D%220%22%20d%3D%22M13%2E5%2013%2E5c%2D2%2E6%202%2E6%2D6%2E7%202%2E6%2D9%2E3%200%2D2%2E6%2D2%2E6%2D2%2E6%2D6%2E7%200%2D9%2E3%202%2E6%2D2%2E6%206%2E7%2D2%2E6%209%2E3%200%202%2E5%202%2E6%202%2E5%206%2E7%200%209%2E3M2%2E6%2015%2E1c3%203%207%2E7%203%2E4%2011%2E2%201%2E1l7%2E7%207%2E7%202%2E4%2D2%2E4%2D7%2E7%2D7%2E7c2%2E3%2D3%2E4%201%2E9%2D8%2E1%2D1%2E1%2D11%2E2C11%2E7%2D%2E8%206%2D%2E8%202%2E6%202%2E6c%2D3%2E5%203%2E4%2D3%2E5%209%200%2012%2E5%22%2F%3E%3C%2Fsvg%3E');
  background-size: contain;
  background-color: transparent;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0.66rem;
  left: 0.66rem;

  @media (min-width: ${theme('breakpoints.0')}) {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23000000%22%20stroke%3D%22transparent%22%20stroke%2Dwidth%3D%220%22%20d%3D%22M13%2E5%2013%2E5c%2D2%2E6%202%2E6%2D6%2E7%202%2E6%2D9%2E3%200%2D2%2E6%2D2%2E6%2D2%2E6%2D6%2E7%200%2D9%2E3%202%2E6%2D2%2E6%206%2E7%2D2%2E6%209%2E3%200%202%2E5%202%2E6%202%2E5%206%2E7%200%209%2E3M2%2E6%2015%2E1c3%203%207%2E7%203%2E4%2011%2E2%201%2E1l7%2E7%207%2E7%202%2E4%2D2%2E4%2D7%2E7%2D7%2E7c2%2E3%2D3%2E4%201%2E9%2D8%2E1%2D1%2E1%2D11%2E2C11%2E7%2D%2E8%206%2D%2E8%202%2E6%202%2E6c%2D3%2E5%203%2E4%2D3%2E5%209%200%2012%2E5%22%2F%3E%3C%2Fsvg%3E');
  }
`

type Props = {
  currentRefinement: string,
  refine: any => any,
  searchResults: Object,
  area: string,
  router: Object,
}

const SearchInput = ({
  currentRefinement,
  refine,
  searchResults,
  area,
  router: {pathname, push, query: {ssr}},
}: Props) => (
  <Wrapper area={area}>
    <SearchForm
      onSubmit={e => {
        e.preventDefault()
        window.document.activeElement.blur()
        window.scrollTo(0, 0)
      }}
      action="."
      role="search"
    >
      <label htmlFor="global-product-search">
        <span className="screen-reader-text">Search The Gluten Project For:</span>
      </label>
      <Input
        id="global-product-search"
        value={ssr ? '' : currentRefinement}
        placeholder="What can we find for you?"
        onChange={e => refine(e.target.value)}
        onFocus={() => {
          if (pathname !== '/search') {
            push('/search')
          }
        }}
        type="search"
      />
      <SearchIconButton type="submit">
        <span className="screen-reader-text">Search</span>
      </SearchIconButton>
    </SearchForm>
    {currentRefinement &&
      searchResults && (
        <CaptionText
          width="50%"
          style={{position: 'absolute', left: 'calc(100% + 0.6rem)', bottom: 13}}
        >
          {searchResults.nbHits} results
        </CaptionText>
      )}
  </Wrapper>
)

export default withRouter(connectSearchBox(connectStateResults(SearchInput)))

// @flow
import * as React from 'react'
import {connectSearchBox, connectStateResults} from 'react-instantsearch/connectors'
import {withRouter} from 'next/router'
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
  justifyContent,
  alignItems,
  alignSelf,
} from 'styled-system'
import {gridArea} from '../utils/styled'
import Box from './Box'
import CaptionText from './CaptionText'

const BaseSearchInput = styled.input.attrs({
  placeholder: 'What can we find for you?',
  fontSize: props => (props.fontSize !== undefined ? props.fontSize : 1),
  bg: props => (props.bg !== undefined ? props.bg : 'greenLight'),
  type: 'text',
})`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${boxShadow}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridArea}

  border: none;
  outline: none;
  height: 2rem;
  border-radius: 10rem;
  font-family: prenton, sans-serif;
  font-weight: 500;
  padding: 0 0.8rem;

  &::placeholder {
    color: black;
    font-style: italic;
    opacity: 1;
  }

  &:focus, &:active {
    &::placeholder {
      opacity: 0.5;
    }
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
  router: {pathname, push, query: {ssrSearchQuery}},
}: Props) => (
  <Box justify="flex-end" area={area} style={{position: 'relative'}}>
    <BaseSearchInput
      id="searchInput"
      value={currentRefinement === ssrSearchQuery ? '' : currentRefinement}
      onChange={e => refine(e.target.value)}
      onFocus={() => (pathname !== '/search' ? push('/search') : null)}
    />
    {currentRefinement &&
      searchResults && (
        <CaptionText
          width="100%"
          style={{position: 'absolute', left: 'calc(100% + 0.5rem)', bottom: 9}}
        >
          {searchResults.nbHits} results
        </CaptionText>
      )}
  </Box>
)

export default withRouter(connectSearchBox(connectStateResults(SearchInput)))

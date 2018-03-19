// @flow
import * as React from 'react'
import styled from 'styled-components'
import upperCaseFirst from 'upper-case-first'
import Text from '../components/Text'
import t from '../theme'

const sentenceCase = s => upperCaseFirst(s.toLowerCase())

const Ul = styled.ul`
  list-style-type: none;
`

const IngredientText = Text.extend`
  color: ${t.colors.grays[1]};
  padding-left: ${t.space[4]};
  text-indent: -${t.space[4]};

  & + & {
    margin-top: ${t.space[1]};
  }

  &:before {
    content: '· ';
  }
`

const IngredientList = ({ingredients}: {ingredients: string}) => {
  const list = ingredients
    .split(/,(?=[^)]*(?:\(|$))/g)
    .map(each => sentenceCase(each.trim()))
    .map(each => (
      <IngredientText is="li" key={each}>
        {each}
      </IngredientText>
    ))

  return <Ul>{list}</Ul>
}

export default IngredientList

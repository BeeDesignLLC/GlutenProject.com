// @flow
import * as React from 'react'
import upperCaseFirst from 'upper-case-first'
import Heading from '../components/Heading'
import Text from '../components/Text'
import t from '../theme'

const sentenceCase = s => upperCaseFirst(s.toLowerCase())

const IngredientText = Text.extend`
  color: ${t.colors.grays[1]};
  padding-left: ${t.space[4]};
  text-indent: -${t.space[4]};

  &:before {
    content: '· ';
  }
`

const IngredientList = ({ingredients}: {ingredients: string}) => {
  const list = ingredients
    .split(/,(?=[^)]*(?:\(|$))/g)
    .map(each => sentenceCase(each.trim()))
    .map(each => (
      <IngredientText mt={1} key={each}>
        {each}
      </IngredientText>
    ))

  return (
    <React.Fragment>
      <Heading
        is="h3"
        fontSize={1}
        fontWeight={700}
        textAlign="left"
        mb={2}
        color="black"
      >
        Ingredients
      </Heading>

      {list}
    </React.Fragment>
  )
}

export default IngredientList

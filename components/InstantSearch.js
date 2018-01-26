//@flow

import {createInstantSearch} from 'react-instantsearch/server'

const {InstantSearch, findResultsState} = createInstantSearch()

export {InstantSearch as default, findResultsState}

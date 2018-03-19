//@flow
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

export default new ApolloClient({
  link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cjb9vgsrd1hlf0187xaxi7te1'}),
  cache: new InMemoryCache(),
})

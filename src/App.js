/** @jsx jsx */
import { jsx } from '@emotion/core'

import ApolloClient from 'apollo-boost'
import DataFetcher from './DataFetcher'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
})

function App() {
  return <DataFetcher client={client} />
}

export default App

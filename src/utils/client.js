import ApolloClient from 'apollo-boost'

const apolloClient = token => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN || token}`
    }
  })
  return client
}

export default apolloClient

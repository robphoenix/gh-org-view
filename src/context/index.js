import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import { IssuesProvider } from './issues-context'

function AppProviders({ client, children }) {
  return (
    <ApolloProvider client={client}>
      <IssuesProvider>{children}</IssuesProvider>
    </ApolloProvider>
  )
}

export default AppProviders

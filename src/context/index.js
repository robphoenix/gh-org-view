import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import client from '../utils/client'
import { IssuesProvider } from './issues-context'

function AppProviders({ children }) {
  return (
    <ApolloProvider client={client}>
      <IssuesProvider>{children}</IssuesProvider>
    </ApolloProvider>
  )
}

export default AppProviders

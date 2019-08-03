import React from 'react'

import Loading from './components/Loading'
import RepoForm from './components/RepoForm'
import AppProviders from './context'
import apolloClient from './utils/client'
import useStoredToken from './hooks/useStoredToken'

const Repos = React.lazy(() => import('./components/Repos'))

function App() {
  const [org, setOrg] = React.useState(``)
  const [token, setToken] = React.useState(``)
  const { setStoredToken } = useStoredToken()

  const onSubmit = values => {
    setOrg(values.name)
    setToken(values.token)
    setStoredToken(values.token)
  }

  const client = apolloClient(token)

  return (
    <div>
      <h1>Github Org View</h1>
      <RepoForm onSubmit={onSubmit} />
      <AppProviders client={client}>
        <React.Suspense fallback={<Loading name={`Repos`} />}>
          {org && <Repos org={org} />}
        </React.Suspense>
      </AppProviders>
    </div>
  )
}

export default App

/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'

import Loading from './components/Loading'
import RepoForm from './components/RepoForm'

const Repos = React.lazy(() => import('./components/Repos'))

function App() {
  const [org, setOrg] = React.useState(``)

  const onSubmit = values => setOrg(values.name)

  return (
    <div>
      <RepoForm onSubmit={onSubmit} />
      <React.Suspense fallback={<Loading name={`Repos`} />}>
        {org && <Repos org={org} />}
      </React.Suspense>
    </div>
  )
}

export default App

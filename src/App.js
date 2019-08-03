/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'
import Loading from './components/Loading'

const Repos = React.lazy(() => import('./components/Repos'))

function App() {
  return (
    <React.Suspense fallback={<Loading name={`Repos`} />}>
      <Repos />
    </React.Suspense>
  )
}

export default App

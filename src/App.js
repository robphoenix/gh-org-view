/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'

const Repos = React.lazy(() => import('./components/Repos'))

function App() {
  return (
    <React.Suspense fallback={<span>Repos loading...</span>}>
      <Repos />
    </React.Suspense>
  )
}

export default App

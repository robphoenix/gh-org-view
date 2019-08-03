/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'

import Loading from './components/Loading'

const Repos = React.lazy(() => import('./components/Repos'))

function App() {
  const [org, setOrg] = React.useState(``)
  const [name, setName] = React.useState(``)

  const handleSubmit = event => {
    event.preventDefault()
    setOrg(name)
  }

  const handleChange = event => {
    event.persist()
    setOrg(``)
    setName(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Organization:
          <input type="text" value={name} onChange={handleChange} autoFocus />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <React.Suspense fallback={<Loading name={`Repos`} />}>
        {org && <Repos org={org} />}
      </React.Suspense>
    </div>
  )
}

export default App

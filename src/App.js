/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'

import Loading from './components/Loading'
import useForm from './hooks/useForm'

const Repos = React.lazy(() => import('./components/Repos'))

function App() {
  const [org, setOrg] = React.useState(``)

  const initialValues = {
    name: ``
  }

  const onSubmit = values => setOrg(values.name)

  const validate = values => {
    let errors = {}
    if (!values.name) {
      errors.name = `You must enter an organization name.`
    }
    return errors
  }

  const { handleSubmit, getInputFieldProps } = useForm({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Organization:
          <input type="text" autoFocus {...getInputFieldProps(`name`)} />
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

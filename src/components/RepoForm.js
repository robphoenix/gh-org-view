import React from 'react'
import useForm from '../hooks/useForm'
import useStoredToken from '../hooks/useStoredToken'

const RepoForm = ({ onSubmit }) => {
  const { getStoredToken } = useStoredToken()

  const validate = values => {
    let errors = {}
    if (!values.name) {
      errors.name = `You must enter an organization name.`
    }
    if (!values.token) {
      errors.token = `You must enter a Personal Access token.`
    }
    return errors
  }

  const initialValues = {
    name: ``,
    token: getStoredToken()
  }

  const { handleSubmit, getInputFieldProps, touched, errors } = useForm({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="token">Personal Access Token:</label>
      <input
        id="token"
        type="password"
        autoFocus
        {...getInputFieldProps(`token`)}
      />
      {touched.token && errors.token && <small>{errors.token}</small>}

      <label htmlFor="name">Organization:</label>
      <input id="name" type="text" {...getInputFieldProps(`name`)} />
      {touched.name && errors.name && <small>{errors.name}</small>}

      <input type="submit" value="Search" />
    </form>
  )
}

export default RepoForm

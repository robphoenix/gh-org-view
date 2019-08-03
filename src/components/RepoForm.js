import React from 'react'
import useForm from '../hooks/useForm'

const RepoForm = ({ onSubmit }) => {
  const validate = values => {
    let errors = {}
    if (!values.name) {
      errors.name = `You must enter an organization name.`
    }
    if (!values.token) {
      errors.name = `You must enter a Personal Access token.`
    }
    return errors
  }

  const initialValues = {
    name: ``,
    token: `${process.env.REACT_APP_GITHUB_TOKEN}` || ``
  }

  const { handleSubmit, getInputFieldProps, touched, errors } = useForm({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Personal Access Token:
        <input type="password" autoFocus {...getInputFieldProps(`token`)} />
        {touched.token && errors.token && <small>{errors.token}</small>}
      </label>

      <label>
        Organization:
        <input type="text" autoFocus {...getInputFieldProps(`name`)} />
        {touched.name && errors.name && <small>{errors.name}</small>}
      </label>
      <input type="submit" value="Search" />
    </form>
  )
}

export default RepoForm

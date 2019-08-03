import React from 'react'
import useForm from '../hooks/useForm'

const RepoForm = ({ onSubmit }) => {
  const validate = values => {
    let errors = {}
    if (!values.name) {
      errors.name = `You must enter an organization name.`
    }
    return errors
  }

  const initialValues = {
    name: ``
  }

  const { handleSubmit, getInputFieldProps, touched, errors } = useForm({
    initialValues,
    onSubmit,
    validate
  })
  return (
    <form onSubmit={handleSubmit}>
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

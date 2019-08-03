import React from 'react'

const formReducer = (state, action) => {
  switch (action.type) {
    case `SET_FIELD_VALUE`:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload
        }
      }
    case `SET_FIELD_TOUCHED`:
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload
        }
      }
    case `SET_ERRORS`:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state
  }
}

const useForm = props => {
  if (!props.onSubmit) {
    throw new Error(`You forgot to pass onSubmit to useForm!`)
  }

  const [state, dispatch] = React.useReducer(formReducer, {
    values: props.initialValues,
    errors: {},
    touched: {}
  })

  const handleInputChange = fieldName => event => {
    event.persist()
    dispatch({
      type: `SET_FIELD_VALUE`,
      payload: { [fieldName]: event.target.value }
    })
  }

  const handleBlur = fieldName => () => {
    dispatch({
      type: `SET_FIELD_TOUCHED`,
      payload: { [fieldName]: true }
    })
  }

  const getInputFieldProps = fieldName => {
    return {
      value: state.values[fieldName],
      onChange: handleInputChange(fieldName),
      onBlur: handleBlur(fieldName)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const errors = props.validate(state.values)
    if (!Object.keys(errors).length) {
      // This is where we would send the form's POST request usually, using ASYNC/AWAIT
      props.onSubmit(state.values)
    } else {
      dispatch({ type: `SET_ERRORS`, payload: errors })
    }
  }

  return {
    handleSubmit,
    getInputFieldProps,
    ...state
  }
}

export default useForm

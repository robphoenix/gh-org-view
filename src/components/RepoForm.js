/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

import useForm from '../hooks/useForm'
import useStoredToken from '../hooks/useStoredToken'

const RepoForm = ({ onSubmit }) => {
  const [colorMode, setColorMode] = useColorMode()
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
    <form
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 4
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%'
        }}
      >
        <div
          sx={{
            display: 'flex',
            marginBottom: 4
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              marginRight: 2
            }}
          >
            <label
              htmlFor="token"
              sx={{
                marginBottom: 2
              }}
            >
              Personal Access Token
            </label>
            <input
              id="token"
              type="password"
              autoFocus
              {...getInputFieldProps(`token`)}
              sx={{
                padding: 2,
                border: '1px solid',
                borderColor: 'text',
                borderRadius: '2px'
              }}
            />
            {touched.token && errors.token && (
              <small
                sx={{
                  color: 'danger'
                }}
              >
                {errors.token}
              </small>
            )}
          </div>

          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1
            }}
          >
            <label
              htmlFor="name"
              sx={{
                marginBottom: 2
              }}
            >
              Organization
            </label>
            <input
              id="name"
              type="text"
              {...getInputFieldProps(`name`)}
              sx={{
                padding: 2,
                border: '1px solid',
                borderColor: 'text',
                borderRadius: '2px'
              }}
            />
            {touched.name && errors.name && (
              <small
                sx={{
                  color: 'danger'
                }}
              >
                {errors.name}
              </small>
            )}
          </div>
        </div>

        <div
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <button
            type="button"
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}
            sx={{
              paddingX: 3,
              paddingY: 2,
              border: '1px solid',
              borderColor: 'text',
              letterSpacing: '0.1em',
              borderRadius: '2px',
              textTransform: 'uppercase',
              backgroundColor: 'text',
              color: 'background',
              cursor: 'pointer',
              marginRight: 2
            }}
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </button>
          <input
            type="submit"
            value="search"
            sx={{
              paddingX: 3,
              paddingY: 2,
              border: '1px solid',
              borderColor: 'primary',
              letterSpacing: '0.1em',
              borderRadius: '2px',
              textTransform: 'uppercase',
              backgroundColor: 'primary',
              color: 'background',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: 'primaryLight'
              }
            }}
          />
        </div>
      </div>
    </form>
  )
}

export default RepoForm

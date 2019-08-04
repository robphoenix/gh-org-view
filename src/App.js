/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { Global, css } from '@emotion/core'

import Loading from './components/Loading'
import RepoForm from './components/RepoForm'
import AppProviders from './context'
import apolloClient from './utils/client'
import useStoredToken from './hooks/useStoredToken'
import theme from './theme'
import Heading from './components/Heading'

const Repos = React.lazy(() => import('./components/Repos'))

function App() {
  const [org, setOrg] = React.useState(``)
  const [token, setToken] = React.useState(``)
  const { setStoredToken } = useStoredToken()

  const onSubmit = values => {
    setOrg(values.name)
    setToken(values.token)
    setStoredToken(values.token)
  }

  const client = apolloClient(token)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            html,
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              background-color: ${theme.colors.background};
              color: ${theme.colors.text};
              font-family: ${theme.fonts.body};
            }
            *,
            *::before,
            *::after {
              box-sizing: inherit;
              margin: 0;
              padding: 0;
            }
          `}
        />
        <Heading />
        <RepoForm onSubmit={onSubmit} />
        <AppProviders client={client}>
          <React.Suspense
            fallback={
              <div sx={{ padding: 4 }}>
                <Loading name="repos" />
              </div>
            }
          >
            {org && <Repos org={org} />}
          </React.Suspense>
        </AppProviders>
      </ThemeProvider>
    </div>
  )
}

export default App

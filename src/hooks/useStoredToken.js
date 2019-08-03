import React from 'react'

const useStoredToken = () => {
  const KEY = `token`
  const defaultValue = process.env.REACT_APP_GITHUB_TOKEN || ``
  const [token, setToken] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(KEY)
      // return token if already stored or default value otherwise
      return item || defaultValue
    } catch (error) {
      // If error return defaultValue
      return defaultValue
    }
  })

  const getStoredToken = () => token
  const setStoredToken = token => {
    setToken(token)
    window.localStorage.setItem(KEY, token)
  }

  return { getStoredToken, setStoredToken }
}

export default useStoredToken

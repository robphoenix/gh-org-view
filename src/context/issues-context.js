import React from 'react'

const IssuesContext = React.createContext(null)

const useIssues = () => {
  const context = React.useContext(IssuesContext)
  if (context === undefined) {
    throw new Error(`useIssues must be used within an IssuesProvider`)
  }
  return context
}

const IssuesProvider = props => {
  const [issues, setIssues] = React.useState([])

  const getIssues = () => issues
  const updateIssues = issues => setIssues(issues)

  return (
    <IssuesContext.Provider value={{ getIssues, updateIssues }} {...props} />
  )
}

export { useIssues, IssuesProvider }

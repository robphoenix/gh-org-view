import React from 'react'
import { useQuery, useApolloClient } from '@apollo/react-hooks'

import { GET_ORG_REPOS } from '../utils/queries'
import Repo from './Repo'
import Issue from './Issue'
import { useIssues } from '../context/issues-context'

const Repos = ({ org }) => {
  const { getIssues, updateIssues } = useIssues()
  const { loading, data, error } = useQuery(GET_ORG_REPOS, {
    variables: {
      name: org
    }
  })
  const client = useApolloClient()
  console.log({ client })

  React.useEffect(() => {
    // clear the current issues when the org changes
    updateIssues([])
  }, [org, updateIssues])

  return (
    <div>
      {!error && !loading && (
        <dl>
          {data.organization.repositories.nodes.map(repo => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </dl>
      )}
      {error && <span>{error.message}</span>}
      {org && getIssues().map(issue => <Issue key={issue.id} issue={issue} />)}
    </div>
  )
}

export default Repos

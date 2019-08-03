import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_ORG_REPOS } from '../utils/queries'
import Repo from './Repo'
import Issue from './Issue'

const Repos = ({ org }) => {
  const [issues, setIssues] = React.useState([])
  const { loading, data, error } = useQuery(GET_ORG_REPOS, {
    variables: {
      name: org
    }
  })

  React.useEffect(() => {
    // clear the current issues when the org changes
    setIssues([])
  }, [org])

  return (
    <div>
      {!error && !loading && (
        <dl>
          {data.organization.repositories.nodes.map(repo => (
            <Repo
              key={repo.id}
              repo={repo}
              handleClick={() => setIssues(repo.issues.nodes)}
            />
          ))}
        </dl>
      )}
      {error && <span>{error.message}</span>}
      {org && issues.map(issue => <Issue key={issue.id} issue={issue} />)}
    </div>
  )
}

export default Repos

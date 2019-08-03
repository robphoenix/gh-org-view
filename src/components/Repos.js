/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_UW_LABS_REPOS } from '../utils/queries'

const Repos = ({ org }) => {
  const [issues, setIssues] = React.useState([])
  const { loading, data, error } = useQuery(GET_UW_LABS_REPOS, {
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
            <div key={repo.id}>
              <dt>
                <a href={repo.url}>{repo.name}</a>
              </dt>
              <dd>
                <div>
                  {repo.description}
                  {repo.primaryLanguage && (
                    <span
                      css={{
                        backgroundColor: repo.primaryLanguage.color
                      }}
                    >
                      {repo.primaryLanguage.name}
                    </span>
                  )}
                  {repo.issues && !!repo.issues.nodes.length && (
                    <div>
                      <span>
                        {repo.issues.totalCount} issue
                        {repo.issues.totalCount > 1 && `s`}
                      </span>
                      <button onClick={() => setIssues(repo.issues.nodes)}>
                        Show Issues
                      </button>
                    </div>
                  )}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      )}
      {error && <span>{error.message}</span>}
      {org &&
        issues.map(issue => (
          <details key={issue.id}>
            <summary>{issue.title}</summary>
            <div>
              <p>{issue.body}</p>
              <span>
                {issue.comments.totalCount || `no`} comment
                {issue.comments.totalCount !== 1 && `s`}
              </span>
            </div>
          </details>
        ))}
    </div>
  )
}

export default Repos

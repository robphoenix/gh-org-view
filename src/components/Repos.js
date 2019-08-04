/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_ORG_REPOS } from '../utils/queries'
import Repo from './Repo'
import Issue from './Issue'
import { useIssues } from '../context/issues-context'
import ErrorMessage from './ErrorMessage'
import Loading from './Loading'

const Repos = ({ org }) => {
  const { loading, data, error } = useQuery(GET_ORG_REPOS, {
    variables: {
      name: org
    }
  })

  const { getIssues, updateIssues } = useIssues()

  React.useEffect(() => {
    // clear the current issues when the org changes
    updateIssues([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [org])

  return (
    <div
      sx={{
        padding: 4,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {!error && !loading && (
        <div
          sx={{
            flex: 1,
            padding: 2,
            marginRight: 3
          }}
        >
          <h2
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              paddingBottom: 2,
              marginBottom: 2,
              borderBottom: '2px solid',
              borderColor: 'primary'
            }}
          >
            repositories
          </h2>
          <dl>
            {data.organization.repositories.nodes.map(repo => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </dl>
        </div>
      )}
      {org && !error && !loading && (
        <div
          sx={{
            flex: 1,
            padding: 2,
            marginLeft: 3
          }}
        >
          <h2
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              paddingBottom: 2,
              marginBottom: 2,
              borderBottom: '2px solid',
              borderColor: 'primary'
            }}
          >
            issues
          </h2>
          <div>
            {getIssues().map(issue => (
              <Issue key={issue.id} issue={issue} />
            ))}
          </div>
        </div>
      )}
      {loading && <Loading name="repos" />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  )
}

export default Repos

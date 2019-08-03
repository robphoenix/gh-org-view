import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_UW_LABS_REPOS } from '../utils/queries'

const Repos = ({ org }) => {
  const { loading, data, error } = useQuery(GET_UW_LABS_REPOS, {
    variables: {
      name: org
    }
  })

  return (
    <div>
      {!error && !loading && (
        <ul>
          {data.organization.repositories.nodes.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default Repos

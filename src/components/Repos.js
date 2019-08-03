/** @jsx jsx */
import { jsx } from '@emotion/core'

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
        <dl>
          {data.organization.repositories.nodes.map(repo => (
            <div key={repo.id}>
              <dt>
                <a href={repo.url}>{repo.name}</a>
              </dt>
              <dd>
                <div>
                  {repo.description}
                  <span
                    css={{
                      backgroundColor: repo.primaryLanguage.color
                    }}
                  >
                    {repo.primaryLanguage.name}
                  </span>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      )}
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default Repos

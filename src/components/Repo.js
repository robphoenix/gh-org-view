/** @jsx jsx */
import { jsx } from 'theme-ui'

import PrimaryLanguage from './PrimaryLanguage'
import RepoIssues from './RepoIssues'
import Divider from './Divider'

const Repo = ({ repo }) => {
  return (
    <div
      sx={{
        marginBottom: 2
      }}
    >
      <dt
        sx={{
          marginBottom: 1
        }}
      >
        <a
          href={repo.url}
          sx={{
            color: 'primary',
            marginBottom: 2
          }}
        >
          <h3>{repo.name}</h3>
        </a>
      </dt>
      <dd
        sx={{
          marginBottom: 2
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <p
            sx={{
              marginBottom: 2
            }}
          >
            {repo.description}
          </p>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {repo.primaryLanguage && (
              <div
                sx={{
                  marginBottom: 2
                }}
              >
                <PrimaryLanguage lang={repo.primaryLanguage} />
              </div>
            )}
            {repo.issues && !!repo.issues.nodes.length && (
              <RepoIssues issues={repo.issues} />
            )}
          </div>
        </div>
      </dd>
      <Divider />
    </div>
  )
}

export default Repo

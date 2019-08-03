import React from 'react'

import PrimaryLanguage from './PrimaryLanguage'
import RepoIssues from './RepoIssues'

const Repo = ({ repo, handleClick }) => {
  return (
    <div>
      <dt>
        <a href={repo.url}>{repo.name}</a>
      </dt>
      <dd>
        <div>
          {repo.description}
          {repo.primaryLanguage && (
            <PrimaryLanguage lang={repo.primaryLanguage} />
          )}
          {repo.issues && !!repo.issues.nodes.length && (
            <RepoIssues issues={repo.issues} handleClick={handleClick} />
          )}
        </div>
      </dd>
    </div>
  )
}

export default Repo

import React from 'react'

const RepoIssues = ({ issues, handleClick }) => {
  return (
    <div>
      <span>
        {issues.totalCount} issue
        {issues.totalCount > 1 && `s`}
      </span>
      <button onClick={handleClick}>Show Issues</button>
    </div>
  )
}

export default RepoIssues

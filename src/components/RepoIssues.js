import React from 'react'
import { useIssues } from '../context/issues-context'

const RepoIssues = ({ issues }) => {
  const { updateIssues } = useIssues()
  return (
    <div>
      <span>
        {issues.totalCount} issue
        {issues.totalCount > 1 && `s`}
      </span>
      <button onClick={() => updateIssues(issues.nodes)}>Show Issues</button>
    </div>
  )
}

export default RepoIssues

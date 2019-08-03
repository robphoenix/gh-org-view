import React from 'react'

const Issue = ({ issue }) => {
  return (
    <details>
      <summary>{issue.title}</summary>
      <div>
        <p>{issue.body}</p>
        <span>
          {issue.comments.totalCount || `no`} comment
          {issue.comments.totalCount !== 1 && `s`}
        </span>
      </div>
    </details>
  )
}

export default Issue

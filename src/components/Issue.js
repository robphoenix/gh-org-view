/** @jsx jsx */
import { jsx } from 'theme-ui'

const Issue = ({ issue }) => {
  return (
    <details
      sx={{
        marginBottom: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <summary>{issue.title}</summary>
      <div>
        <p
          sx={{
            padding: 2,
            marginBottom: 2
          }}
        >
          {issue.body}
        </p>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <span
            sx={{
              border: '1px solid',
              borderColor: 'text',
              borderRadius: '2px',
              paddingY: 1,
              paddingX: 2
            }}
          >
            {issue.comments.totalCount || `no`} comment
            {issue.comments.totalCount !== 1 && `s`}
          </span>
        </div>
      </div>
    </details>
  )
}

export default Issue

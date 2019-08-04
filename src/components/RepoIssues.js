/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useIssues } from '../context/issues-context'

const RepoIssues = ({ issues }) => {
  const { updateIssues } = useIssues()
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <span
        sx={{
          border: '1px solid',
          borderColor: 'text',
          borderRadius: '2px',
          paddingY: 1,
          paddingX: 2,
          marginRight: 2
        }}
      >
        {issues.totalCount} issue
        {issues.totalCount > 1 && `s`}
      </span>
      <button
        onClick={() => updateIssues(issues.nodes)}
        sx={{
          paddingX: 3,
          paddingY: 2,
          border: '1px solid',
          borderColor: 'primary',
          letterSpacing: '0.1em',
          borderRadius: '2px',
          textTransform: 'uppercase',
          backgroundColor: 'primary',
          color: 'background',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: 'primaryLight'
          }
        }}
      >
        Show Issues
      </button>
    </div>
  )
}

export default RepoIssues

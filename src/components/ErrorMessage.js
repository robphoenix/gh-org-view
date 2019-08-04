/** @jsx jsx */
import { jsx } from 'theme-ui'

const ErrorMessage = props => {
  return (
    <span
      sx={{
        backgroundColor: 'dangerMuted',
        color: 'danger',
        border: '1px solid',
        borderColor: 'danger',
        borderRadius: '2px',
        paddingX: 3,
        paddingY: 2
      }}
    >
      {props.children}
    </span>
  )
}

export default ErrorMessage

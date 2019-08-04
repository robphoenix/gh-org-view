/** @jsx jsx */
import { jsx } from 'theme-ui'

const Loading = ({ name }) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <span
        sx={{
          fontSize: 4,
          paddingBottom: 2,
          borderBottom: '2px solid',
          borderColor: 'primary',
          textTransform: 'capitalize'
        }}
      >
        loading {name}...
      </span>
    </div>
  )
}

export default Loading

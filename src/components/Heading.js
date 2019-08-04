/** @jsx jsx */
import { jsx } from 'theme-ui'

const Heading = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 4,
        marginBottom: 3
      }}
    >
      <h1
        sx={{
          paddingBottom: 2,
          borderBottom: '2px solid',
          borderColor: 'primary',
          fontFamily: 'monospace',
          fontSize: 5,
          textTransform: 'capitalize'
        }}
      >
        github org view
      </h1>
    </div>
  )
}

export default Heading

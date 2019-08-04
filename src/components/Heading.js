/** @jsx jsx */
import { jsx } from 'theme-ui'

const Heading = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 4
      }}
    >
      <h1
        sx={{
          paddingBottom: 2,
          borderBottom: '2px solid',
          borderColor: 'primary'
        }}
      >
        Github Org View
      </h1>
    </div>
  )
}

export default Heading

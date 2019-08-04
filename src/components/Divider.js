/** @jsx jsx */
import { jsx } from 'theme-ui'

const Divider = () => {
  return (
    <hr
      sx={{
        display: 'block',
        height: '1px',
        border: 0,
        borderTop: '1px solid',
        borderColor: 'primary'
      }}
    />
  )
}

export default Divider

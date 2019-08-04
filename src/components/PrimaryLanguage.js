/** @jsx jsx */
import { jsx } from 'theme-ui'

const PrimaryLanguage = ({ lang }) => {
  return (
    <small
      sx={{
        backgroundColor: lang.color,
        border: '1px solid',
        borderColor: lang.color,
        borderRadius: '2px',
        paddingX: 2,
        paddingY: 1
      }}
    >
      {lang.name}
    </small>
  )
}

export default PrimaryLanguage

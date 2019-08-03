/** @jsx jsx */
import { jsx } from '@emotion/core'

const PrimaryLanguage = ({ lang }) => {
  return (
    <span
      css={{
        backgroundColor: lang.color
      }}
    >
      {lang.name}
    </span>
  )
}

export default PrimaryLanguage

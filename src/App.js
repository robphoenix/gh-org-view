/** @jsx jsx */
import { jsx } from '@emotion/core'

import DataFetcher from './DataFetcher'
import client from './utils/client'

function App() {
  return <DataFetcher client={client} />
}

export default App

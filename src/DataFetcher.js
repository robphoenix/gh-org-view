// @ts-nocheck
import React from 'react'
import { gql } from 'apollo-boost'

const DataFetcher = ({ client }) => {
  const [repos, setRepos] = React.useState([])

  const query = gql`
    query {
      organization(login: "uw-labs") {
        repositories(first: 50) {
          nodes {
            id
            url
            name
          }
        }
      }
    }
  `

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({ query })
        setRepos(data.organization.repositories.nodes)
      } catch (error) {
        console.log({ error })
      }
    }
    fetchData()
  }, [client, query])

  return (
    <div>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataFetcher

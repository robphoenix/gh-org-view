// @ts-nocheck
import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_UW_LABS_REPOS = gql`
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

const DataFetcher = () => {
  const { loading, data } = useQuery(GET_UW_LABS_REPOS)

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.organization.repositories.nodes.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher

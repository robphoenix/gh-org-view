import { gql } from 'apollo-boost'

const GET_UW_LABS_REPOS = gql`
  query($name: String!) {
    organization(login: $name) {
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

export { GET_UW_LABS_REPOS }

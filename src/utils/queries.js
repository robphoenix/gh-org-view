import { gql } from 'apollo-boost'

const GET_UW_LABS_REPOS = gql`
  query($name: String!) {
    organization(login: $name) {
      repositories(first: 50) {
        nodes {
          id
          url
          name
          description
          primaryLanguage {
            color
            name
          }
          issues(first: 20) {
            totalCount
            nodes {
              id
              title
              body
              createdAt
              comments {
                totalCount
              }
              author {
                login
                url
              }
            }
          }
        }
      }
    }
  }
`

export { GET_UW_LABS_REPOS }

import { gql } from "@apollo/client";

export const getHome = gql`
  query Home($id: ID!) {
    home(where: { id: $id }) {
      title
      description {
        text
      }
      rotateText {
        ... on RotateText {
          text
        }
      }
      skills {
        ... on Skills {
          id
          name
          backgroundProgress {
            hex
          }
          percent
          image {
            url
          }
        }
      }
      projectTitle
      projectDescription
      projects {
        ... on ProjectsCard {
          name
          link
          image {
            url
          }
        }
      }
    }
  }
`;

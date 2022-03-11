import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query {
    posts {
      title
      description
      slug
      _id
    }
  }
`;

export const GET_POST = gql`
  query posts($slug: String) {
    post(slug: "post2") {
      title
      description
      content
      image {
        url
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query posts($start: Int, $limit: Int) {
    posts(start: $start, limit: $limit, sort: "createdAt:desc") {
      title
      createdAt
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

export const GET_GENERAL_DATA = gql`
  query {
    general {
      title
      description
      logo {
        url
      }
    }
  }
`;

import Layout from "../components/Layout";
import Main from "../components/Main";
import { GetServerSideProps } from "next";
import { GET_ALL_POSTS, GET_GENERAL_DATA } from "../graphql/queries";
import { PreviewPost } from "../lib/types";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import client from "../apollo";

const Home = ({ postsData }: { postsData: PreviewPost[] }) => {
  const [posts, setPosts] = useState(postsData);
  const [hasMore, setHasMore] = useState(true);
  const { data } = useQuery(GET_GENERAL_DATA);

  const getMorePosts = async () => {
    const { data } = await client.query({
      query: GET_ALL_POSTS,
      variables: {
        start: posts.length,
        limit: 4,
      },
    });

    setPosts([...posts, ...data.posts]);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:1337/posts/count");
      const count = await res.json();
      setHasMore(count > posts.length);
    })();
  }, [posts]);

  return (
    <Layout general={data}>
      <Main posts={posts} getMorePosts={getMorePosts} hasMore={hasMore} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_ALL_POSTS,
    variables: {
      start: 0,
      limit: 4,
    },
  });

  return {
    props: {
      postsData: data.posts,
    },
  };
};

export default Home;

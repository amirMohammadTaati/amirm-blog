import Layout from "../components/Layout";
import Main from "../components/Main";
import { GetServerSideProps } from "next";
import { GET_ALL_POSTS, GET_GENERAL_DATA } from "../graphql/queries";
import { PreviewPost } from "../lib/types";
import { useState, useEffect } from "react";
import client from "../apollo";

const Home = ({ data }: { data: PreviewPost[] }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [general, setGeneral] = useState([]);

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

  useEffect(() => {
    (async () => {
      const { data } = await client.query({
        query: GET_GENERAL_DATA,
      });

      setGeneral(data.general);
    })();
  }, []);

  return (
    <Layout general={general}>
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
      data: data.posts,
    },
  };
};

export default Home;

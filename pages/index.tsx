import Layout from "../components/Layout";
import Main from "../components/Main";
import { GetServerSideProps } from "next";
import { GET_ALL_POSTS, GET_GENERAL_DATA } from "../graphql/queries";
import { PreviewPost } from "../lib/types";
import { useState, useEffect } from "react";
import client from "../apollo";

const Home = ({
  postsData,
  general,
}: {
  postsData: PreviewPost[];
  general: { title: string; description: string; logo: { url: string } };
}) => {
  const [posts, setPosts] = useState(postsData);
  const [hasMore, setHasMore] = useState(true);

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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API}/posts/count`
      );
      const count = await res.json();
      setHasMore(count > posts.length);
    })();
  }, [posts]);

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

  const general = await client.query({
    query: GET_GENERAL_DATA,
  });

  return {
    props: {
      postsData: data.posts,
      general: general.data.general,
    },
  };
};

export default Home;

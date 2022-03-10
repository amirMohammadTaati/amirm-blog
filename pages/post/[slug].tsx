import { Post } from "../../lib/types";
import { GetServerSideProps } from "next";

export default function PostPage({ post }: { post: Post }) {
  return <h1>{post.title}</h1>;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  const res = await fetch(`http://localhost:1337/posts?slug=${slug}`);
  const json = await res.json();

  return {
    props: {
      post: json[0],
    },
  };
};

import { Post } from "../../lib/types";
import { GetServerSideProps } from "next";
import { Box, Heading, Text } from "@chakra-ui/react";
import Content from "../../components/Content";

export default function PostPage({ post }: { post: Post }) {
  const date = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "long",
  }).format(new Date(post.createdAt));

  return (
    <Box bgColor="#fff" h="100vh">
      <Box textAlign="center" py="3%">
        <Heading size="2xl">{post.title}</Heading>
        <Text mt="25px" color="#757575">
          {date}
        </Text>
      </Box>
      <hr />
      <Box px="25%" py="3%">
        <Content content={post.content} />
      </Box>
    </Box>
  );
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

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
      <Box textAlign="center" py="2%">
        <Heading as="h1" size="xl">
          {post.title}
        </Heading>
        <Text fontSize={["sm", "sm", "sm", "sm"]} mt="10px" color="#757575">
          {date}
        </Text>
      </Box>
      <hr />
      <Box px={["5%", "5%", "5%", "25%"]} py="3%">
        <Content content={post.content} />
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/posts?slug=${slug}`
  );
  const json = await res.json();

  return {
    props: {
      post: json[0],
    },
  };
};

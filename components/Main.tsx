import { Box } from "@chakra-ui/react";
import { PostArray } from "../lib/types";
import PostCard from "./PostCard";

export default function Main({ posts }: PostArray) {
  return (
    <Box
      w="70%"
      h="100vh"
      float="left"
      padding="50px 170px"
      paddingBottom="75px"
    >
      {posts.map((post) => (
        <PostCard
          title={post.title}
          description={post.description}
          slug={post.slug}
          _id={post._id}
          key={post._id}
          createdAt={post.createdAt}
        />
      ))}
    </Box>
  );
}

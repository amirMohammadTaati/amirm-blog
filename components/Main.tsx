import { Box } from "@chakra-ui/react";
import { PreviewPost } from "../lib/types";
import Posts from "./Posts";

export default function Main({
  posts,
  getMorePosts,
  hasMore,
}: {
  posts: PreviewPost[];
  getMorePosts: () => void;
  hasMore: boolean;
}) {
  return (
    <Box
      w="70%"
      h="100vh"
      float="left"
      padding="0px 170px"
      paddingBottom="75px"
    >
      <Posts posts={posts} getMorePosts={getMorePosts} hasMore={hasMore} />
    </Box>
  );
}

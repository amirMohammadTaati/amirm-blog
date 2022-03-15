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
      w={["100%", "100%", "100%", "70%"]}
      h="100vh"
      bgColor="#eff1f5"
      float={["none", "none", "none", "left"]}
      padding={["0px 15px", "0px 25px", "0px 35px", "0px 170px"]}
      paddingBottom="75px"
    >
      <Posts posts={posts} getMorePosts={getMorePosts} hasMore={hasMore} />
    </Box>
  );
}

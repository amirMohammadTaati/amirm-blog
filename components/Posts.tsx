import PostCard from "./PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { PreviewPost } from "../lib/types";

interface Props {
  posts: PreviewPost[];
  getMorePosts: () => void;
  hasMore: boolean;
}

export default function Posts({ posts, getMorePosts, hasMore }: Props) {
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePosts}
      hasMore={hasMore}
      loader={<h3>Loading ... </h3>}
    >
      {posts?.map((post) => (
        <PostCard
          title={post.title}
          description={post.description}
          slug={post.slug}
          _id={post._id}
          key={post._id}
          createdAt={post.createdAt}
        />
      ))}
    </InfiniteScroll>
  );
}

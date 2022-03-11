export interface Post {
  title: string;
  description: string;
  slug: string;
  _id: string;
  key: string;
  createdAt: string;
  content: string;
}

export interface PostArray {
  posts: Post[];
}

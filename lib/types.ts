interface Image {
  url: string;
}

export interface Post {
  title: string;
  description: string;
  slug: string;
  _id: string;
  key: string;
  image: Image;
}

export interface PostArray {
  posts: Post[];
}

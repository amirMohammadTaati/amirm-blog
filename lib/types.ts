interface Image {
  url: string;
}

export interface Post {
  title: string;
  description: string;
  image: Image;
}

export interface PostArray {
  posts: Post[];
}

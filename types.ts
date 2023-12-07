export interface User {
  id: number;
  username: string;
  password: string;
  posts: Post[];
  Like: Like[];
}

export interface Post {
  id: number;
  caption: string;
  imageUrl: string;
  userId: number;
  likes: Like[];
}

export interface Like {
  id: number;
  userId: number;
  postId: number;
}

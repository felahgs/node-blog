export interface PostData {
  id: string;
  title: string;
  author: string;
  published_date: string;
  tags: Array<string>;
  summary: string;
  content: string;
  likes: number;
  // comments_count: number;
  is_published: boolean;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  joined_date: string;
}

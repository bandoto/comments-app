export interface IResponse {
  comments: IComment[];
  total: number;
  skip: number;
  limit: number;
}

export interface IComment {
  id: number | string;
  body: string;
  postId?: number;
  user: IUser;
}

export interface IUser {
  id: number | string;
  username: string;
}

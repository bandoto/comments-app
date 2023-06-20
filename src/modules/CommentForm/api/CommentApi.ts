import { IComment, IResponse } from "../models/CommentModels";
import axios, { AxiosResponse } from "axios";

export const fetchCommentsData = async (): Promise<IComment[]> => {
  try {
    const { data }: AxiosResponse<IResponse> = await axios.get<IResponse>(
      "https://dummyjson.com/comments"
    );

    return data.comments;
  } catch (error) {
    console.error(error);
    return [];
  }
};

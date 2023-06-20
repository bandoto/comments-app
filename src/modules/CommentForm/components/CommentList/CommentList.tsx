import React, { useEffect, useState } from "react";
import { IComment } from "../../models/CommentModels";
import { fetchCommentsData } from "../../api/CommentApi";
import { CommentItem } from "../CommentItem/CommentItem";
import { v4 as uuidv4 } from "uuid";
import { CommentTextarea } from "../CommentTextarea/CommentTextarea";
import Loader from "../../../../components/Loader/Loader";

import "./CommentList.scss";

export const CommentList: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedComments = await fetchCommentsData();
        setComments(fetchedComments);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteComment = (comment: IComment) => {
    const updatedComments = comments.filter((item) => item.id !== comment.id);

    setComments(updatedComments);
  };

  const handleAddComment = (text: string) => {
    const newComment: IComment = {
      id: uuidv4(),
      body: text,
      user: {
        id: uuidv4(),
        username: username || "Unknown user",
      },
    };

    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <>
      <div className="comment__comments">
        {isLoading && <Loader text="Loading..." />}

        {!comments.length && <Loader text="No comments" />}

        {!isLoading &&
          comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              handleDeleteComment={handleDeleteComment}
            />
          ))}
      </div>
      <CommentTextarea handleAddComment={handleAddComment} />
    </>
  );
};

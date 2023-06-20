import React from "react";
import { IComment } from "../../models/CommentModels";
import { Label } from "../../../../UI/Label/Label";

import "./CommentItem.scss";

interface ItemProps {
  comment: IComment;
  handleDeleteComment: (comment: IComment) => void;
}

export const CommentItem: React.FC<ItemProps> = ({
  comment,
  handleDeleteComment,
}) => {
  return (
    <div className="comment__item">
      <Label name={comment.user.username} />
      <p className="comment__text">{comment.body}</p>
      <div
        onClick={() => handleDeleteComment(comment)}
        className="comment__delete"
      >
        X
      </div>
    </div>
  );
};

import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";

import "./CommentTextarea.scss";

interface Textarea {
  handleAddComment: (text: string) => void;
}

export const CommentTextarea: React.FC<Textarea> = ({ handleAddComment }) => {
  const [textarea, setTextarea] = useState<string>("");
  const debounced = useDebounce(textarea);

  useEffect(() => {
    const localStorageText = localStorage.getItem("text");
    if (localStorageText) {
      setTextarea(localStorageText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("text", debounced);
  }, [debounced]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };

  const handleClick = () => {
    handleAddComment(textarea);
    setTextarea("");
  };

  return (
    <div className="comment__textarea">
      <textarea
        onChange={handleChange}
        value={textarea}
        placeholder="Type..."
      ></textarea>
      <button onClick={handleClick} className="comment__button" type="submit">
        Send
      </button>
    </div>
  );
};

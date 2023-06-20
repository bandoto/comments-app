import React from "react";

import "./Label.scss";

interface ILabel {
  name: string;
}

export const Label: React.FC<ILabel> = ({ name }) => {
  const toOnlyFirstLetters = (name: string) => {
    if (name) {
      const words = name.split(" ");

      if (words.length > 1) {
        return words.map((word) => word[0]);
      }

      return words[0][0];
    }
  };

  return (
    <div className="comment__label">
      <div className="comment__letters">
        <span>{toOnlyFirstLetters(name)}</span>
      </div>
      <div className="comment__name">{name}</div>
    </div>
  );
};

import React from "react";
import { Container } from "../../UI/Container/Container";
import { CommentList } from "../../modules/CommentForm";

import "./MainPage.scss";

const MainPage: React.FC = () => {
  return (
    <section className="comment">
      <Container>
        <div className="comment__wrapper">
          <CommentList />
        </div>
      </Container>
    </section>
  );
};

export default MainPage;

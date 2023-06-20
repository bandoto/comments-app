import { Container } from "../../UI/Container/Container";

import "./MainPage.scss";
import { CommentList } from "../../modules/CommentForm/components/CommentList/CommentList";

const MainPage = () => {
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

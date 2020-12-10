import React from "react";
import Nav from "../Nav/Nav";
import HomeTakes from "../HomeTakes/HomeTakes";
import HomeCommentators from "../HomeCommentators/HomeCommentators";
import HomeRankings from "../HomeRankings/HomeRankings";
import "./HomePage.css";
import ApiContext from "../../ApiContext";

export default class HomePage extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;
  render() {
    const { takes = [] } = this.context;
    const { commentators = [] } = this.context;
    return (
      <main className="HomePage">
        <Nav />
        <div className="home-container">
          <section className="home-main">
            <HomeTakes takes={takes} />
            <div>
              <HomeCommentators commentators={commentators} />
              <HomeRankings commentators={commentators} />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

import React from "react";
// import HomeRankingsItem from '../HomeCommentatorsItem/HomeCommentatorsItem'

export default function HomeRankings(props) {
  return (
    <>
      <div>
        <h2>Top 5 Commentators</h2>
        <hr />
        {props.commentators.map((commentator) => (
          <p>{commentator.name}</p>
        ))}
      </div>
    </>
  );
}

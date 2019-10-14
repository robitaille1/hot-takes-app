import React from 'react'
import './HomeCommentators.css'
import HomeCommentatorsItem from '../HomeCommentatorsItem/HomeCommentatorsItem'

export default function HomeCommentators(props) {
        return (
            <div className="content home-comment">
                <h2 className="section-title">All Commentators</h2>
                <HomeCommentatorsItem commentators={props.commentators}/>
            </div>
        );
  }
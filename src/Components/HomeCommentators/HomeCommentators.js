import React from 'react'
import { Link } from 'react-router-dom'
import './HomeCommentators.css'
import HomeCommentatorsItem from '../HomeCommentatorsItem/HomeCommentatorsItem'

export default function HomeCommentators(props) {
        return (
            <>
            <div className="content home-comment">
                <h2 className="commentators-title">Commentators</h2>
                <hr />
                <HomeCommentatorsItem commentators={props.commentators}/>
                <Link to='/add-commentator' style={{ textDecoration: 'none' }}>
                    <button className="new-comm-btn">Add New Commentator</button>
                </Link>
            </div>
            </>
        );
  }
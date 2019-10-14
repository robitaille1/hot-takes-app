import React from 'react'
import { Link } from 'react-router-dom'
import './HomeCommentators.css'

export default function HomeCommentators(props) {
        return (
            <div className="content home-comment">
                <h2 className="section-title">All Commentators</h2>
                {props.commentators.map(commentator => 
                    <div className='commentator' key={commentator.id}>
                        <Link className="link" to={`commentator/${commentator.id}`} style={{ textDecoration: 'none' }}>
                            <p>{commentator.name}</p>
                        </Link>
                    </div>
                )}
            </div>
        );
  }
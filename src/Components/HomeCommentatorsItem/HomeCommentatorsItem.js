import React from 'react'
import { Link } from 'react-router-dom'
// import './HomeCommentatorsItem.css'

export default function HomeCommentatorsItem(props) {
        return (
            <>
                {props.commentators.map(commentator => 
                    <div className='commentator' key={commentator.id}>
                        <Link className="link" to={`commentator/${commentator.id}`} style={{ textDecoration: 'none' }}>
                            <p>{commentator.name}</p>
                        </Link>
                    </div>
                )}
            </>
        );
  }
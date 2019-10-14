import React from 'react'
import { Link } from 'react-router-dom'
// import './HomeTakesItem.css'

export default function HomeTakesItem(props) {
        return (
            <>
                {props.takes.map(take => 
                    <li className='take-object' key={take.id}>
                        <Link className="link" to={`commentator/${take.commentatorId}`} style={{ textDecoration: 'none' }}>
                            <h2>{take.commentator} - {take.take} - {take.correct}</h2>
                        </Link>
                    </li>
                )}
            </>
        );
  }
  
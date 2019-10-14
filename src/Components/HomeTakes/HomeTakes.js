import React from 'react'
import { Link } from 'react-router-dom'
import './HomeTakes.css'

export default function HomeTakes(props) {
        return (
            <div className="content home-takes">
                <h2 className="section-title">Most Recent Takes</h2>
                <ul>
                    {props.takes.map(take => 
                        <li className='take-object' key={take.id}>
                            <Link className="link" to={`commentator/${take.commentatorId}`} style={{ textDecoration: 'none' }}>
                                <h2>{take.commentator} - {take.take} - {take.correct}</h2>
                            </Link>
                        </li>
                    )}
                </ul>  
            </div>
        );
  }
  
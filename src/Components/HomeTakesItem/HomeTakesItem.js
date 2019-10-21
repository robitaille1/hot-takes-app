import React from 'react'
import { Link } from 'react-router-dom'
import './HomeTakesItem.css'

export default function HomeTakesItem(props) {
    props.takes.sort((a, b) => (a.id < b.id) ? 1 : -1)
        return (
            <>
                {props.takes.slice(0,7).map(take => 
                    <li className='take-object' key={take.id}>
                        <Link className="link" to={`/commentators/${take.commentatorid}`} style={{ textDecoration: 'none' }}>
                            <h2 className='take-item'><span className='comm-name'>{take.commentator}<br></br></span>  {take.take} - <span className={take.correct === 'TRUE' ? 'true' : 'false'}>{take.correct}</span></h2>
                        </Link>
                    </li>
                )}
            </>
        );
  }
  
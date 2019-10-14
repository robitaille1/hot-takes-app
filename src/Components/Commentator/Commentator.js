import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Commentator.css'

export default function Commentator(props) {
    function calculateScore() {
        const takeTotal = props.takes.length;
        let takesCorrect = 0;
        for(let i = 0; i < props.takes.length; i++) {
            if(props.takes[i].correct === 'TRUE') {
                takesCorrect++;
            };
        }
        return (takesCorrect/takeTotal)*100
    }

    return (
      <main className='Commentator'>
          <Nav />
            <div className="container">
            <section className="comment-main">
                <div className="content comment-main">
                    <h2 className="section-title">
                        {props.commentator.name}
                    </h2>
                    <div className="comment-content">
                        <h2 className='network'>
                            {props.commentator.network}
                        </h2>
                        <a target='_blank' rel="noopener noreferrer" className='social-link' href={props.commentator.twitter}>Twitter</a>
                        <a target='_blank' rel="noopener noreferrer" className='social-link' href={props.commentator.instagram}>Instagram</a>
                        <h3>
                            About:
                        </h3>
                        <p>
                            {props.commentator.about}
                        </p>
                        <h4 className="score">Hot Takes Score: <span className="medium">{calculateScore()}</span></h4>
                        <Link to='/add-take' style={{ textDecoration: 'none' }}>
                            <button className="new-tk-btn">Add New Take</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="comment-takes">
            <ul>
            {props.takes.map(take => 
                <li className='take-object takes' key={take.id}>
                    <h2>{take.date} - {take.take} - <span>{take.correct}</span></h2>
                </li>
            )}
            </ul>
            </section>
        </div>
      </main>
    );
  }
  
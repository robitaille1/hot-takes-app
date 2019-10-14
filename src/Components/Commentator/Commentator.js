import React from 'react'
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
                        <a className='social-link' href={props.commentator.twitter}>Twitter</a>
                        <a className='social-link' href={props.commentator.instagram}>Instagram</a>
                        <h3>
                            About:
                        </h3>
                        <p>
                            {props.commentator.about}
                        </p>
                        <h4 className="score">Hot Takes Score: <span className="medium">{calculateScore()}</span></h4>
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
            



                {/* <div className="take-object takes">
                    <h2>
                        10/13/19 - The Celtics will win by 25 points. <span class="false">False</span>
                    </h2>
                </div>
                <div className="take-object takes">
                    <h2>
                        10/10/19 - The Patriots will beat the Giants <span class="true">True</span>
                    </h2>
                </div>
                <div className="take-object takes">
                    <h2>
                        07/31/19 - Kyrie Irving will leave the Celtics. <span class="true">True</span>
                    </h2>
                </div>
                <div className="take-object takes">
                    <h2>
                        06/01/19 - The Raptors will beat the Warriors in the Finals <span class="true">True</span>
                    </h2>
                </div>
                <div className="take-object takes">
                    <h2>
                        06/01/19 - Kawhi will win NBA finals MVP<span class="true">True</span>
                    </h2>
                </div> */}
            </section>
        </div>
      </main>
    );
  }
  
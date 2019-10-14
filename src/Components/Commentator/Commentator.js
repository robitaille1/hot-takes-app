import React from 'react'
import Nav from '../Nav/Nav'
import './Commentator.css'

function Commentator() {
    return (
      <main className='Commentator'>
          <Nav />
            <div class="container">
            <section class="comment-main">
                <div class="content comment-main">
                    <h2 class="section-title">
                        Bill Simmons
                    </h2>
                    <div class="comment-content">
                        <h2>
                            The Ringer
                        </h2>
                        <a href="https://twitter.com/BillSimmons">Twitter</a>
                        <a href="https://www.instagram.com/sptguy33/">Instagram</a>
                        <h3>
                            About:
                        </h3>
                        <p>
                            William John Simmons III, is an American former sports writer and current sports analyst, author, and podcaster. Simmons first gained attention with his website as "The Boston Sports Guy" and was recruited by ESPN in 2001, where he eventually operated the website Grantland and worked until 2015.
                        </p>
                        <h4 class="score">Hot Takes Score: <span class="medium">80</span></h4>
                    </div>
                </div>
            </section>
            <section class="comment-takes">
                <div class="take-object takes">
                    <h2>
                        10/13/19 - The Celtics will win by 25 points. <span class="false">False</span>
                    </h2>
                </div>
                <div class="take-object takes">
                    <h2>
                        10/10/19 - The Patriots will beat the Giants <span class="true">True</span>
                    </h2>
                </div>
                <div class="take-object takes">
                    <h2>
                        07/31/19 - Kyrie Irving will leave the Celtics. <span class="true">True</span>
                    </h2>
                </div>
                <div class="take-object takes">
                    <h2>
                        06/01/19 - The Raptors will beat the Warriors in the Finals <span class="true">True</span>
                    </h2>
                </div>
                <div class="take-object takes">
                    <h2>
                        06/01/19 - Kawhi will win NBA finals MVP<span class="true">True</span>
                    </h2>
                </div>
            </section>
        </div>
      </main>
    );
  }
  
  export default Commentator;
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './HomePage.css'

function HomePage() {
    return (
      <main className='HomePage'>
        <Nav />
        <div class="container">
        <section class="home-main">
            <div class="content home-takes">
                <h2 class="section-title">Most Recent Takes</h2>
                <div class="take-object">
                    <Link to='/bill-simmons'>
                        <h2>
                            Bill Simmons  - 10/13/19 - The Celtics will win by 25 points. <span class="false">False</span>
                        </h2>
                    </Link>
                </div>
                <div class="take-object">
                    <h2>
                        Dave Portnoy  - 10/13/19 - The Chiefs will beat the Texans. <span class="false">False</span>
                    </h2>
                </div>
                <div class="take-object">
                    <h2>
                        Stephen A Smith  - 10/10/19 - The Patriots will beat the Giants <span class="true">True</span>
                    </h2>
                </div>
                <div class="take-object">
                    <h2>
                        Mina Kimes - 05/30/19 - Lebron will sign with the Lakes <span class="true">True</span>
                    </h2>
                </div>
            </div>
            <div class="content home-comment">
                <h2 class="section-title">All Commentators</h2>
                <Link to='/bill-simmons'>
                    <div class="commentator">
                        <p>Bill</p>
                    </div>
                </Link>
                
                <div class="commentator">
                    
                </div>
                <div class="commentator">
                
                </div>
                <div class="commentator">
                
                </div>
                <div class="commentator">
                
                </div>
            </div>
        </section>
        <section class="home-add">
            <Link to='/add-take'>
                <button class="new-btn">Add New Take</button>
            </Link>
            <Link to='/add-commentator'>
                <button class="new-btn">Add New Commentator</button>
            </Link>
        </section>
    </div>
      </main>
    );
  }
  
  export default HomePage;
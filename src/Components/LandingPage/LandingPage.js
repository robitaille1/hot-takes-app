import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    return (
      <main className='LandingPage'>
        <div className="landing container">
            <div className="center">
                <h1 className="landing-title">Hot Takes</h1>
                <p className="landing-content">An app to track takes made by sports commentators</p>
                <Link to='/home'>
                    <button className="landing-button">
                        Home
                    </button>
                </Link>
            </div>
        </div>
        <div className="app-info">
            <h2>The Rotton Tomatos of sports commentary.</h2>
            <p>Sports Commentators, have many hot takes, but there is no where keep track of whether they are right or wrong. Hot Takes is an app to keep track of what commentators say, and show who is the most reliable. Add a commentator or add a take to a commentator's hot takes score update.</p>
            </div>
      </main>
    );
  }
  
  export default LandingPage;
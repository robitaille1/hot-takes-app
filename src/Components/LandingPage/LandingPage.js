import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    return (
      <main className='LandingPage'>
        <div className="landing-container">
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
            <div className='def-div'>
                <h2 className='definition-title'>Hot Take: </h2>
                <p className='definition-noun'>noun</p>
                <p className='definition'>A piece of commentary, typically produced quickly in response to a recent event, whose primary purpose is to attract attention.</p>
            </div>
            

            <h3 className='header'>The Rotton Tomatos of sports commentary</h3>
            <p className='description'>
                Sports Commentators have many hot takes, but there is no where to follow whether they are right or wrong. Hot Takes is an app to keep track of what commentators say, and show who is the most reliable.
            </p>
            <h3 className='header'>Add A Commentator</h3>
            <p className='description'>
                Add your favorite commentator to our database to start adding takes. There are many commentators for many different sports. Our goal is to be the place to go in order to see all the information in one place. Add their name, network, social media accounts, and about section to set up a profile.
            </p>
            <h3 className='header'>Add A Take</h3>
            <p className='description'>
                Add your takes to a commentator in order to keep them honest. We want users to know who is the most reliable commentators are and who is just a hot take artist. Takes can be as simple or complex as you'd like, as long as the take is provable as a correct or incorrect.
            </p>
            </div>
      </main>
    );
  }
  
  export default LandingPage;
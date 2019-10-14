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
      </main>
    );
  }
  
  export default LandingPage;
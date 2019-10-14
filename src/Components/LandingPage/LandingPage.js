import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    return (
      <main className='LandingPage'>
        <div class="landing container">
            <div class="center">
                <h1 class="landing-title">Hot Takes</h1>
                <p class="landing-content">An app to track takes made by sports commentators</p>
                <Link to='/home'>
                    <button class="landing-button">
                        Home
                    </button>
                </Link>
            </div>
        </div>
      </main>
    );
  }
  
  export default LandingPage;
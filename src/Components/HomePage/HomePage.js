import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomeTakes from '../HomeTakes/HomeTakes'
import HomeCommentators from '../HomeCommentators/HomeCommentators'
import './HomePage.css'

export default function HomePage(props) {
        return (
            <main className='HomePage'>
              <Nav />
              <div className="container">
                <section className="home-main">
                    <HomeTakes takes={props.takes}/>
                    <HomeCommentators commentators={props.commentators}/>
                </section>
                <section className="home-add">
                    <Link to='/add-take' style={{ textDecoration: 'none' }}>
                        <button className="new-btn">Add New Take</button>
                    </Link>
                    <Link to='/add-commentator' style={{ textDecoration: 'none' }}>
                        <button className="new-btn">Add New Commentator</button>
                    </Link>
                </section>
               </div>
            </main>
          );
  }
  

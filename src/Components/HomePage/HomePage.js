import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './HomePage.css'

export default function HomePage(props) {
        return (
            <main className='HomePage'>
              <Nav />
              <div className="container">
              <section className="home-main">
                  <div className="content home-takes">
                      <h2 className="section-title">Most Recent Takes</h2>
                        <ul>
                            {props.takes.map(take => 
                                <li className='take-object' key={take.id}>
                                    <Link className="link" to={`commentator/${take.commentatorId}`} style={{ textDecoration: 'none' }}>
                                        <h2>{take.commentator} - {take.take} - {take.correct}</h2>
                                    </Link>
                                </li>
                            )}
                        </ul>  
                  </div>
                  <div className="content home-comment">
                      <h2 className="section-title">All Commentators</h2>
                      {props.commentators.map(commentator => 
                            <div className='commentator' key={commentator.id}>
                                <Link className="link" to={`commentator/${commentator.id}`} style={{ textDecoration: 'none' }}>
                                    <p>{commentator.name}</p>
                                </Link>
                            </div>
                        )}
                  </div>
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
  

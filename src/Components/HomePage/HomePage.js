import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomeTakes from '../HomeTakes/HomeTakes'
import HomeCommentators from '../HomeCommentators/HomeCommentators'
import './HomePage.css'
import ApiContext from '../../ApiContext'

export default class HomePage extends React.Component {

    static defaultProps = {
        match: {
          params: {}
        }
    }

    static contextType = ApiContext

        render() {
            const { takes=[] } = this.context
            const { commentators=[] } = this.context
            return (
                <main className='HomePage'>
                  <Nav />
                  <div className="container">
                    <section className="home-main">
                        <HomeTakes takes={takes}/>
                        <HomeCommentators commentators={commentators}/>
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
  }
  

import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext'
import config from '../../config'
import Nav from '../Nav/Nav'
import CommentatorTakes from '../CommentatorTakes/CommentatorTakes'
import './Commentator.css'


export default class Commentator extends React.Component {
    static defaultProps ={
        onDeleteCommentator: () => {},
    }
      
    static contextType = ApiContext;


    handleDeleteCommentator = e => {
        e.preventDefault()
        const commentatorId = this.props.id

        fetch(`${config.API_ENDPOINT}/commentators/${commentatorId}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(event => console.log(event))
        })
        .then(() => {
            this.context.deleteCommentator(commentatorId)
            this.props.onDeleteCommentator(commentatorId)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    calculateScore = () => {
        const takeTotal = this.props.takes.length;
        let takesCorrect = 0;
        for(let i = 0; i < this.props.takes.length; i++) {
            if(this.props.takes[i].correct === "TRUE") {
                takesCorrect++;
            };
        }
        const score = Math.round((takesCorrect/takeTotal)*100);
        if(isNaN(score)){
            return 0
        } else {
            return score
        }
    }

    render() {
        this.props.takes.sort((a, b) => (a.id < b.id) ? 1 : -1)
        return (
            <main className='Commentator'>
                <Nav />
                  <div className="container">
                  <section className="comment-main">
                      <div className="comm-content comment-main">
                          <h2 className="cmm-name">
                              {this.props.commentator.name}
                          </h2>
                          <div className="comment-content">
                              <h2 className='network'>
                                  {this.props.commentator.network}
                              </h2>
                              <a target='_blank' rel="noopener noreferrer" className='social-link' href={this.props.commentator.twitter}>Twitter</a>
                              <a target='_blank' rel="noopener noreferrer" className='social-link' href={this.props.commentator.instagram}>Instagram</a>
                              <h3>
                                  About:
                              </h3>
                              <p>
                                  {this.props.commentator.about}
                              </p>
                              <h4 className="score">Hot Takes Score: <span className={this.calculateScore() > 60? "true": " false"}>{this.calculateScore()}</span></h4>
                              <button 
                                    className="comm-delete-btn"
                                    type="button"
                                    onClick={this.handleDeleteCommentator}>
                                    Delete Commentator    
                            </button>
                          </div>
                      </div>
                  </section>
                  <section className="comment-takes">
                  <h2 className='takes-section-title'>Takes</h2>
                  <ul>
                  {this.props.takes.map(take => 
                      <CommentatorTakes 
                        take={take}
                        key={take.id}
                       />
                  )}
                  </ul>
                  <Link to='/add-take' style={{ textDecoration: 'none' }}>
                    <button 
                    className="new-tk-btn">
                        Add New Take
                    </button>
                </Link>
                  </section>
              </div>
            </main>
          );
    }
}
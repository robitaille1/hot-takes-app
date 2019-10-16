import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import { findCommentatorId } from '../../commentators-helpers'
import config from '../../config'
import Nav from '../Nav/Nav'
import './AddTakeForm.css'


export default class AddTakeForm extends Component {
    static contextType = ApiContext;
    handleSubmit = (event) => {
        event.preventDefault()
        const { commentators=[] } = this.context
        const idForCommentator = findCommentatorId(commentators, event.target['commentator'].value);
        const newTake = {
          take: event.target['take'].value,
          date: event.target['date'].value,
          commentatorid: idForCommentator.id,
          commentator: event.target['commentator'].value,
          correct: event.target['correct'].value,
          sport: event.target['sport'].value,
        }
        fetch(`${config.API_ENDPOINT}/takes`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newTake),
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(event => Promise.reject(event))
            return res.json()
          })
          .then(take => {
            this.context.addTake(take)
          })
          .catch(error => {
            console.error({ error })
          })
    }

    render() {
      const { commentators=[] } = this.context
        return (
            <main className='AddTakeForm'>
                <Nav />
                <section className="container">
                  <form onSubmit={this.handleSubmit}>
                      <fieldset>
                          <div className="form-section">
                              <label htmlFor="date">Date:</label>
                              <input type="date" name="date" id="date" />
                          </div>
                          <div className="form-section">
                              <label htmlFor="commentator">Select a Commentator:</label>
                              <select name="commentator" id="commentatorName">
                                {commentators.map(commentator =>
                                  <option key={commentator.id} value={commentator.name}>{commentator.name}</option>
                                )}
                              </select>
                          </div>
                          <div className="form-section">
                              <label className="take-label"htmlFor="take">Take Information:</label>
                              <textarea name="take" id="take" cols="30" rows="10"></textarea>
                          </div>
                          <div className="form-section">
                              <label htmlFor="sport">Sport:</label>
                              <select name="sport" id="Sport">
                                  <option value="NBA">NBA</option>
                                  <option value="NFL">NFL</option>
                                  <option value="MLB">MLB</option>
                                  <option value="NHL">NHL</option>
                              </select>
                          </div>
                          <div className="form-section">
                              <label htmlFor="correct">Correct or Incorrect?</label>
                              <select name="correct" id="correct">
                                  <option value="TRUE">TRUE</option>
                                  <option value="FALSE">FALSE</option>
                              </select>
                          </div>
                          <button className="form-btn">Submit</button>
                      </fieldset>
                  </form>
              </section>
            </main>
          );
    }
    
  }
  
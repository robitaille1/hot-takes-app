import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import { findCommentatorId } from '../../commentators-helpers'
import config from '../../config'
import Nav from '../Nav/Nav'
import './AddTakeForm.css'


export default class AddTakeForm extends Component {
    static defaultProps = {
      history: {
        push: () => { }
      },
    }

    static contextType = ApiContext;
    
    handleSubmit = (event) => {
        event.preventDefault()
        const { commentators=[] } = this.context
        const idForCommentator = findCommentatorId(commentators, event.target['commentator'].value);
        const newTake = {
          take: event.target['take'].value,
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
            this.props.history.push(`/commentators/${take.commentatorid}`)
          })
          .catch(error => {
            console.error({ error })
          })
    }

    handleClickCancel = () => {
      this.props.history.push(`/home`)
    };

    render() {
      const { commentators=[] } = this.context
        return (
            <main className='AddTakeForm'>
                <Nav />
                <section className="form-container">
                  <form onSubmit={this.handleSubmit}>
                      <fieldset>
                          <div className="form-section">
                              <label htmlFor="commentator">Select a Commentator:</label>
                              <select name="commentator" id="commentatorName">
                                {commentators.map(commentator =>
                                  <option key={commentator.id} value={commentator.name}>{commentator.name}</option>
                                )}
                              </select>
                          </div>
                          <label className="take-label"htmlFor="take">Take Information:</label>
                          <div className="form-section">
                              <textarea name="take" id="take" cols="30" rows="10"></textarea>
                          </div>
                          <div className="form-section">
                              <label htmlFor="sport">Sport:</label>
                              <select name="sport" id="Sport">
                                  <option value="NBA">NBA</option>
                                  <option value="NFL">NFL</option>
                                  <option value="MLB">MLB</option>
                                  <option value="NHL">NHL</option>
                                  <option value="NHL">CFB</option>
                                  <option value="NHL">CBB</option>
                                  <option value="NHL">MLS</option>
                                  <option value="NHL">EPL</option>
                              </select>
                          </div>
                          <div className="form-section">
                              <label htmlFor="correct">Correct?</label>
                              <select name="correct" id="correct">
                                  <option value="TRUE">TRUE</option>
                                  <option value="FALSE">FALSE</option>
                              </select>
                          </div>
                          <button type='submit'className="form-btn">Submit</button>
                          <button type='button' onClick={this.handleClickCancel} className="form-btn cancel">Cancel</button>
                      </fieldset>
                  </form>
              </section>
            </main>
          );
        }
  }
  
import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import config from '../../config'
import Nav from '../Nav/Nav'
import './AddCommentatorForm.css'


export default class AddCommentatorForm extends Component {
    static contextType = ApiContext

    submitForm = (event) => {
        event.preventDefault();
        const newCommentator = {
            name: event.target['name'].value,
            network: event.target['network'].value,
            twitter: event.target['twitter'].value,
            instagram: event.target['instagram'].value,
            about: event.target['about'].value,
        }
        console.log(newCommentator)
        fetch(`${config.API_ENDPOINT}/commentators`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCommentator),
        })
            .then(response => {
                if (response.ok)
                    // return response.json().then(e => Promise.reject(e))
                    return response.json().then(e => console.log(e))
            })
            .then(commentator => {
                this.context.addCommentator(commentator)
            })
            .catch(error => {
                console.error({ error })
            })
    }


    render() {
        return (
            <main className='AddCommentatorForm'>
                <Nav />
                <section className="container">
                  <form onSubmit={this.submitForm}>
                      <fieldset>
                          <div className="form-section">
                              <label htmlFor="date">Name:</label>
                              <input type="text" name="name" id="name" />
                          </div>
                          <div className="form-section">
                              <label htmlFor="commentator">Network:</label>
                              <input type="text" name="network" id="network" />
                          </div>
                          <div className="form-section">
                              <label htmlFor="twitter">Twitter:</label>
                              <input type="text" name="twitter" id="twitter"/>
                          </div>
                          <div className="form-section">
                              <label htmlFor="instagram">Instagram:</label>
                              <input type="text" name="instagram" id="instagram" />
                          </div>
                          <div className="form-section">
                              <label className="about-label" htmlFor="about">About:</label>
                              <textarea name="about" id="about" cols="30" rows="10"></textarea>
                          </div>
                          <button className="form-btn">Submit</button>
                      </fieldset>
                  </form>
              </section>
            </main>
          );
    }
  }
  

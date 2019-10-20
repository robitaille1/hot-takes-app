import React, { Component } from 'react'
import { findCommentator } from '../../commentators-helpers'
import ApiContext from '../../ApiContext'
import config from '../../config'
import Nav from '../Nav/Nav'
// import './EditCommentatorForm.css'


export default class EditCommentator extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

 
   state = {
      id: '',
      name: '',
      network: '',
      twitter: '',
      instagram: '',
      about: '',
    };
  

  static contextType = ApiContext

    componentDidMount() {
      const { commentators=[] } = this.context
      const { commentatorId } = this.props.match.params
      const commentator = findCommentator(commentators, commentatorId) || { content: '' }
        this.setState({
          id: commentator.id,
          name: commentator.name,
          network: commentator.network,
          twitter: commentator.twitter,
          instagram: commentator.instagram,
          about: commentator.about
        })
    }

    handleChangeName = e => {
        this.setState({ name: e.target.value })
      };
    
      handleChangeNetwork = e => {
        this.setState({ network: e.target.value })
      };
    
      handleChangeTwitter = e => {
        this.setState({ twitter: e.target.value })
      };
    
      handleChangeInstagram = e => {
        this.setState({ instagram: e.target.value })
      };

      handleChangeAbout = e => {
        this.setState({ about: e.target.value })
      };

      handleSubmit = e => {
        e.preventDefault()
        const { commentatorId } = this.props.match.params
        const { id, name, network, twitter, instagram, about } = this.state
        const newCommentator = { id, name, network, twitter, instagram, about }
        fetch(`${config.API_ENDPOINT}/commentators/${commentatorId}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newCommentator),
        })
        .then(res => res.text())
        // .then(res => {
        //   if (!res.ok)
        //     return res.json().then(error => Promise.reject(error))
        // })
          .then(() => {
            this.resetFields(newCommentator)
            this.context.updateCommentator(newCommentator)
            this.props.history.push(`/commentators/${newCommentator.id}`)
          })
          .catch(error => {
            console.error(error)
          })
      }

      resetFields = (newFields) => {
        this.setState({
          name: newFields.name || '',
          network: newFields.network || '',
          twitter: newFields.twitter || '',
          instagram: newFields.instagram || '',
          about: newFields.about || '',
        })
      }

      handleClickCancel = () => {
        const { commentatorId } = this.props.match.params
        this.props.history.push(`/commentators/${commentatorId}`)
      };
    
    render() {
        const { name, network, twitter, instagram, about } = this.state
        return (
            <main className='AddCommentatorForm'>
                <Nav />
                <section className="container">
                  <form onSubmit={this.handleSubmit}>
                      <fieldset>
                          <div className="form-section">
                              <label htmlFor="date">Name:</label>
                            <input type="text" name="name" id="name" value={name} onChange={this.handleChangeName} />
                          </div>
                          <div className="form-section">
                              <label htmlFor="commentator">Network:</label>
                              <input type="text" name="network" id="network" value={network} onChange={this.handleChangeNetwork}/>
                          </div>
                          <div className="form-section">
                              <label htmlFor="twitter">Twitter:</label>
                              <input type="text" name="twitter" id="twitter" value={twitter} onChange={this.handleChangeTwitter}/>
                          </div>
                          <div className="form-section">
                              <label htmlFor="instagram">Instagram:</label>
                              <input type="text" name="instagram" id="instagram" value={instagram} onChange={this.handleChangeInstagram} />
                          </div>
                          <div className="form-section">
                              <label className="about-label" htmlFor="about">About:</label>
                              <textarea name="about" id="about" cols="30" rows="10" value={about} onChange={this.handleChangeAbout}></textarea>
                          </div>
                          <button className="form-btn" onClick={this.handleClickCancel}>Cancel</button>
                          <button className="form-btn">Submit</button>
                      </fieldset>
                  </form>
              </section>
            </main>
          );
    }
  }
  

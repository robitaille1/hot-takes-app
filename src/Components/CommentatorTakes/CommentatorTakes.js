import React, { Component } from 'react'
import config from '../../config'
import ApiContext from '../../ApiContext'

class CommentatorTakes extends Component {
    static defaultProps ={
        onDeleteTake: () => {},
      }
      static contextType = ApiContext;

    handleDeleteTake = e => {
        e.preventDefault()
        const takeId = this.props.take.id

        fetch(`${config.API_ENDPOINT}/takes/${takeId}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(() => {
                this.context.deleteTake(takeId)
                this.props.onDeleteTake(takeId)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return(
            <li className='take-object takes' key={this.props.take.id}>
                <h2>
                    {this.props.take.date} - {this.props.take.take} - <span>{this.props.take.correct}</span>
                    <button 
                        className='comm-delete-btn' 
                        type='button' 
                        onClick={this.handleDeleteTake}>
                            Delete
                    </button>
                </h2>
            </li>
        )
    }
}

export default CommentatorTakes;
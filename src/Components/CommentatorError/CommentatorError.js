import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import './CommentatorError.css'

export default class CommentatorError extends Component {
    render() {
        return(
            <main className='CommentatorError'>
                <Nav />
                <h2 className='error'>Could Not Find Commentator</h2>
            </main>
        ) 
    }
}

import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import CommentatorPage from './CommentatorPage'

describe(`CommentatorPage Component`, () => {
  const commentators = [
      {
          id: 1,
          name: "Dave",
      }
  ]  
  const takes = [
    {
        id: 3,
        take: "No good"
    }
  ]
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><CommentatorPage takes={takes} commentators={commentators}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
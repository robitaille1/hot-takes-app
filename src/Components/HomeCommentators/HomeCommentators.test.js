import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import HomeCommentators from './HomeCommentators'

describe(`HomeCommentators Component`, () => {
  const commentators = [
      {
          id: 1,
          name: "Dave",
      }
  ]  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><HomeCommentators commentators={commentators}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
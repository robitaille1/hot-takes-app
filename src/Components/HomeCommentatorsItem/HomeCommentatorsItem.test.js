import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import HomeCommentatorsItem from './HomeCommentatorsItem'

describe(`HomeCommentatorsItem Component`, () => {
  const commentators = [
      {
          id: 1,
          name: "Dave",
      }
  ]  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><HomeCommentatorsItem commentators={commentators}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
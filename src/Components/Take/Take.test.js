import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Take from './Take'

describe(`Take Component`, () => {
  const take = [
    {
        id: 3,
        take: "No good"
    }
  ]
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><Take take={take}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
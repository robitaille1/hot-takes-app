import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import HomeTakes from './HomeTakes'

describe(`HomeTakes Component`, () => {
  const takes = [
      {
          id: 1,
          take: "Hello",
      }
  ]  
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><HomeTakes key={takes.id}takes={takes}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
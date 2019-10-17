import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import HomeTakesItem from './HomeTakesItem'

describe(`HomeTakesItem Component`, () => {
  const takes = [
      {
          id: 1,
          take: "Hello",
      }
  ]  
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><HomeTakesItem takes={takes}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AddTakeForm from './AddTakeForm'

describe(`AddTakeForm Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><AddTakeForm /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})

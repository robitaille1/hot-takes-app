import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AddCommentatorForm from './AddCommentatorForm'

describe(`AddCommentatorForm Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><AddCommentatorForm/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})

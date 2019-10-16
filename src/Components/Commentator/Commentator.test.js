import React from 'react';
import ReactDOM from 'react-dom'
import Commentator from './Commentator'

describe(`Commentator component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Commentator />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

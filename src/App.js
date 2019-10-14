import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import HomePage from './Components/HomePage/HomePage'
import AddTakeForm from './Components/AddTakeForm/AddTakeForm'
import AddCommentatorForm from './Components/AddCommentatorForm/AddCommentatorForm'
import Commentator from './Components/Commentator/Commentator';
import STORE from './STORE'

class App extends Component {
  state = {
    commentators: STORE.commentators,
    takes: STORE.takes
  };

  render() {
    return (
      <main className='App'>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/add-take' component={AddTakeForm}/>
        <Route path='/add-commentator' component={AddCommentatorForm}/>
        <Route path='/bill-simmons' component={Commentator}/>
      </main>
    );
  }
}

export default App;

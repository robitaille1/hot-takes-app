import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import HomePage from './Components/HomePage/HomePage'
import AddTakeForm from './Components/AddTakeForm/AddTakeForm'
import AddCommentatorForm from './Components/AddCommentatorForm/AddCommentatorForm'
import CommentatorPage from './Components/CommentatorPage/CommentatorPage';
import ApiContext from '../src/ApiContext'
import config from '../src/config'

class App extends Component {
  state = {
    commentators: [],
    takes: []
  };

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/takes`),
        fetch(`${config.API_ENDPOINT}/commentators`)
    ])
        .then(([takesRes, commentatorsRes]) => {
            if (!takesRes.ok)
                return takesRes.json().then(e => Promise.reject(e));
            if (!commentatorsRes.ok)
                return commentatorsRes.json().then(e => Promise.reject(e));

            return Promise.all([takesRes.json(), commentatorsRes.json()]);
        })
        .then(([takes, commentators]) => {
            this.setState({takes, commentators});
        })
        .catch(error => {
            console.error({error});
        });
 }

 handleDeleteCommentator = commentatorId => {
     this.setState({
         commentators: this.state.commentators.filter(commentator => commentator.id !== commentatorId )
     })
 }






  renderRoutes() {
    return (
        <>
            {['/home'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      component={HomePage}
                  />
              ))}
        </>
    );
}

renderCommentatorRoutes() {
  return (
      <>
          {['/commentators/:commentatorId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    component={CommentatorPage}
                />
            ))}
      </>
  );
}


  render() {
    const value = {
        takes: this.state.takes,
        commentators: this.state.commentators,
        deleteCommentator: this.handleDeleteCommentator
    };
    return (
        <ApiContext.Provider value={value}>
            <main className='App'>
                <Route exact path='/' component={LandingPage}/>
                {this.renderRoutes()}
                <Route path='/add-take' component={AddTakeForm}/>
                <Route path='/add-commentator' component={AddCommentatorForm}/>
                {this.renderCommentatorRoutes()}
            </main>
        </ApiContext.Provider>
    );
  }
}

export default App;

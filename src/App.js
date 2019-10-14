import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import {getTakesForCommentator, findCommentator} from '../src/takes-helpers';
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


  renderRoutes() {
    const {takes, commentators} = this.state;
    return (
        <>
            {['/home'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      render={routeProps => (
                          <HomePage
                              commentators={commentators}
                              takes={takes}
                              {...routeProps}
                          />
                      )}
                  />
              ))}
        </>
    );
}

renderCommentatorRoutes() {
  const {takes, commentators} = this.state;
  return (
      <>
          {['/commentator/:commentatorId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    render={routeProps => {
                        const {commentatorId} = routeProps.match.params;
                        const commentatorInfo = findCommentator(commentators, commentatorId)
                        const takesForCommentator = getTakesForCommentator(
                            takes,
                            commentatorId
                        );
                        return (
                            <Commentator
                                {...routeProps}
                                takes={takesForCommentator}
                                commentator={commentatorInfo}
                            />
                        );
                    }}
                />
            ))}
      </>
  );
}



  render() {
    return (
      <main className='App'>
        <Route exact path='/' component={LandingPage}/>
        {this.renderRoutes()}
        <Route path='/add-take' component={AddTakeForm}/>
        <Route path='/add-commentator' component={AddCommentatorForm}/>
        {this.renderCommentatorRoutes()}
      </main>
    );
  }
}

export default App;

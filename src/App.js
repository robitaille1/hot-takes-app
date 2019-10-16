import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import {getTakesForCommentator, findCommentator} from '../src/takes-helpers';
import LandingPage from './Components/LandingPage/LandingPage'
import HomePage from './Components/HomePage/HomePage'
import AddTakeForm from './Components/AddTakeForm/AddTakeForm'
import AddCommentatorForm from './Components/AddCommentatorForm/AddCommentatorForm'
import Commentator from './Components/Commentator/Commentator';
// import ApiContext from '../src/ApiContext'
import config from '../src/config'
// import STORE from './STORE'

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
  const { takes, commentators } = this.state;
  return (
      <>
          {['/commentators/:commentatorId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    render={routeProps => {
                        const {commentatorid} = routeProps.match.params;
                        const commentatorInfo = findCommentator(commentators, commentatorId)
                        const takesForCommentator = getTakesForCommentator(
                            takes,
                            commentatorid
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

import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import HomePage from '../HomePage/HomePage'
import AddTakeForm from '../AddTakeForm/AddTakeForm'
import AddCommentatorForm from '../AddCommentatorForm/AddCommentatorForm'
import CommentatorPage from '../CommentatorPage/CommentatorPage'
import EditCommentator from '../EditCommentator/EditCommentator'
import ApiContext from '../../ApiContext'
import config from '../../config'

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

    handleAddCommentator = commentator => {
        this.setState({
        commentators: [
            ...this.state.commentators,
            commentator
        ]
        })
    }

    handleDeleteCommentator = commentatorId => {
        this.setState({
            commentators: this.state.commentators.filter(commentator => commentator.id !== commentatorId )
        })
    }

    handleAddTake = take => {
        this.setState({
            takes: [
                ...this.state.takes,
                take
            ]
        })
    }

    handleDeleteTake = takeId => {
        this.setState({
            takes: this.state.takes.filter(take => take.id !== takeId )
        })
    }

    handleUpdateCommentator = updatedCommentator => {
        this.setState({
            commentators: this.state.commentators.map(cm =>
              (cm.id !== updatedCommentator.id) ? cm : updatedCommentator
            )
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
        addCommentator: this.handleAddCommentator,
        deleteCommentator: this.handleDeleteCommentator,
        addTake: this.handleAddTake,
        deleteTake: this.handleDeleteTake,
        updateCommentator: this.handleUpdateCommentator
    };
    return (
        <ApiContext.Provider value={value}>
            <main className='App'>
                <Route exact path='/' component={LandingPage}/>
                {this.renderRoutes()}
                <Route path='/add-take' component={AddTakeForm}/>
                <Route path='/add-commentator' component={AddCommentatorForm}/>
                <Route path='/edit/:commentatorId' component={EditCommentator}/>
                {this.renderCommentatorRoutes()}
            </main>
        </ApiContext.Provider>
    );
  }
}

export default App;

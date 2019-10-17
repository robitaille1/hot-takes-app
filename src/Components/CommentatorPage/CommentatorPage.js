import React from 'react'
import Commentator from '../Commentator/Commentator'
import ApiContext from '../../ApiContext'
import { findCommentator, getTakesForCommentator } from '../../commentators-helpers'
// import CommentatorError from '../CommentatorError/CommentatorError'

export default class CommentatorPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteCommentator = commentatorId => {
    this.props.history.push(`/home`)
  }

  handleDeleteTake = commentatorId => {
    this.props.history.push(`/commentators/${commentatorId}`)
  }

  render() {
    const { commentators=[] } = this.context
    const { takes=[] } = this.context
    const { commentatorId } = this.props.match.params
    const commentator = findCommentator(commentators, commentatorId) || { content: '' }
    const commentatorTakes = getTakesForCommentator(takes, commentatorId)
    return (
      <section className='Commentator'>
        {/* <CommentatorError> */}
            <Commentator
              id={commentator.id}
              commentator={commentator}
              takes={commentatorTakes}
              onDeleteCommentator={this.handleDeleteCommentator}
              onDeleteTake={this.handleDeleteTake}
            />
        {/* </CommentatorError> */}
      </section>
    )
  }
}
import React from 'react'

export default React.createContext({
  takes: [],
  commentators: [],
  addCommentator: () => {},
  addTake: () => {},
  deleteTake: () => {},
  deleteCommentator: () => {},
  updateCommentator: () => {},
})
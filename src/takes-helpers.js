export const findCommentator = (commentators=[], commentatorId) =>
  commentators.find(commentator => commentator.id === commentatorId)

export const findTake = (takes=[], takeId) =>
  takes.find(take => take.id === takeId)

export const getTakesForCommentator = (takes=[], commentatorId) => (
  (!commentatorId)
    ? takes
    : takes.filter(take => take.commentatorId === commentatorId)
)

export const countTakesForCommentator = (takes=[], commentatorId) =>
  takes.filter(take => take.commentatorId === commentatorId).length


  
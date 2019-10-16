export const findCommentator = (commentators=[], commentatorId) =>
// eslint-disable-next-line
  commentators.find(commentator => commentator.id == commentatorId)


export const findCommentatorId = (commentators=[], commentatorName) =>
// eslint-disable-next-line
  commentators.find(commentator => commentator.name == commentatorName)

export const getTakesForCommentator = (takes=[], commentatorId) => (
  (!commentatorId)
    ? takes
    // eslint-disable-next-line
    : takes.filter(take => take.commentatorid == commentatorId)
)



import './index.css'

const CommentItem = props => {
  const {arrayList, deleteComment, toggleFavorite} = props
  const {
    id,
    firstNames,
    names,
    comments,
    dates,
    newClass,
    isFavorite,
  } = arrayList

  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickFavorite = () => {
    toggleFavorite(id)
  }

  const deleteButton = () => {
    deleteComment(id)
  }

  const addClass = isFavorite ? 'sky-blue' : ''
  return (
    <li>
      <div>
        <div>
          <p className={newClass}>{firstNames}</p>
        </div>
        <div>
          <h1>{names}</h1>
          <p>{dates}</p>
        </div>
        <p>{comments}</p>
        <button type="button" onClick={onClickFavorite}>
          <img src={imgUrl} alt="like" />
        </button>
        <p className={addClass}>Like</p>
        <button type="button" testid="delete" onClick={deleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem

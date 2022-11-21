import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    arrayList: [],
    count: 0,
    name: '',
    comment: '',
  }

  inputValue = event => {
    this.setState({name: event.target.value})
  }

  textValue = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const firstName = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const object = {
      id: uuidv4(),
      firstNames: firstName,
      names: name,
      comments: comment,
      dates: date,
      newClass: index,
      isFavorite: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, object],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  toggleFavorite = id => {
    this.setState(prevState => ({
      arrayList: prevState.arrayList.map(eachData => {
        if (eachData.id === id) {
          return {...eachData, isFavorite: !eachData.isFavorite}
        }
        return eachData
      }),
    }))
  }

  deleteComment = id => {
    const {arrayList} = this.state
    const filteredList = arrayList.filter(eachValue => eachValue.id !== id)
    this.setState(prevState => ({
      arrayList: filteredList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {arrayList, count, name, comment} = this.state
    return (
      <div>
        <div>
          <div>
            <h1>Comments</h1>
            <div>
              <p>Say something about 4.0 Technologies</p>
              <form onSubmit={this.addComment}>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={this.inputValue}
                  value={name}
                />
                <textarea
                  placeholder="Your Comment"
                  onChange={this.textValue}
                  value={comment}
                />
                <button type="submit">Add Comment</button>
              </form>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div>
          <p>
            <span>{count}</span> Comments
          </p>
          <ul>
            {arrayList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                arrayList={eachItem}
                deleteComment={this.deleteComment}
                toggleFavorite={this.toggleFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

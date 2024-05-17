// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {isLoggedIn} = this.props
    return (
      <h1 className="main-heading">
        {isLoggedIn ? 'Welcome User' : 'Please Login'}
      </h1>
    )
  }
}

export default Message

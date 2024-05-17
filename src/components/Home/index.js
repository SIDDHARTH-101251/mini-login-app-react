// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {isLoggedIn: false}

  toggleLoggedIn = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLoggedIn={isLoggedIn} />
          <Login isLoggedIn={isLoggedIn} onLogin={this.toggleLoggedIn} />
          <Logout isLoggedIn={isLoggedIn} onLogout={this.toggleLoggedIn} />
        </div>
      </div>
    )
  }
}

export default Home

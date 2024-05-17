import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {isLoggedIn, onLogout} = this.props

    let element = ''

    if (isLoggedIn) {
      element = (
        <button className="button" type="button" onClick={onLogout}>
          Logout
        </button>
      )
    }

    return element
  }
}

export default Logout

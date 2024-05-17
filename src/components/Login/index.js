import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {isLoggedIn, onLogin} = this.props

    let element = ''

    if (!isLoggedIn) {
      element = (
        <button className="button" type="button" onClick={onLogin}>
          Login
        </button>
      )
    }

    return element
  }
}

export default Login

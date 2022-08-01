import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1>
    // <h1>Hello</h1>
  }
}

// const Welcome = () => <h1>Hello, User</h1>

export default Welcome

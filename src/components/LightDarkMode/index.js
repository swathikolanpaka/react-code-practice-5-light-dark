// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    this.setState(prevState => {
      isDarkMode: !prevState.isDarkMode
    })
  }

  render() {
    const {isDarkMode} = this.state
    const backgroundColor = isDarkMode ? 'dark-container' : 'light-container'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`${backgroundColor}`}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.changeMode}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

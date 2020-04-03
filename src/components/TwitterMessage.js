import React from 'react'

class TwitterMessage extends React.Component {
  constructor () {
    super()

    this.state = {
      message: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render () {
    let charName = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type='text'
          name='message'
          id='message'
          value={this.state.message}
          onChange={this.handleOnChange}
        />
        <br></br>
        {charName}
      </div>
    )
  }
}

export default TwitterMessage

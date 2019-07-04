import React, { Component } from 'react'
import './ChatBubble.css'

class ChatBubble extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: false
    }
  }
  render() {
    return (
      <div
        className={this.props.isSelf ? 'chatbubble chatbubble-self' : 'chatbubble'}
        onMouseEnter={() => { this.setState({ isHovered: true }) }}
        onMouseLeave={() => { this.setState({ isHovered: false }) }}
      >
        <div className="chatbubble-image" style={{ backgroundImage: `url(${this.props.imgUrl})` }} />
        <div className="chatbubble-content">
          <div className="chatbubble-text">
            <div className="chatbubble-name">{this.props.name}</div>
            <span>{this.props.text}</span>
          </div>
          <div className="chatbubble-timestamp">
            {this.state.isHovered ? this.props.absoluteTimestamp : this.props.timestamp}
          </div>
        </div>
        <div className="chatbubble-filler" />
      </div>
    )
  }
}

export default ChatBubble
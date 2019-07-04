import React, { Component } from 'react'
import axios from 'axios'
import ChatBubble from './ChatBubble'
import './Chatroom.css'
import Chat from '..';

class Chatroom extends Component {
    constructor() {
      super()
      this.state = {
        chats: [],
        message: '',
      }
      this.chatList = React.createRef();
    }
    componentDidMount() {
      this.getChats(() => {
        this.chatList.current.scrollTop = this.chatList.current.scrollHeight
      })
      setInterval(() => {
       this.getChats();
      }, 200)      
    }

    getChats(callback = () => {}) {
      axios.get('http://167.99.66.103/api/chats')
        .then(res => {
          this.setState({ chats: res.data })
          callback()
        })
    }

    onChatEnter = e => {
      console.log(this.props.loggedInUsername)
     if (e.key === 'Enter' && this.state.message != '') {
       axios.post('http://167.99.66.103/api/chats', {
         username: this.props.loggedInUsername,
         message: this.state.message,
       }).then(() => {
          this.setState({ message: '' })
          this.getChats(() => {
            this.chatList.current.scrollTop = this.chatList.current.scrollHeight
          })
       })
     }
    }

    render() {
      console.log(this.state.chats)

      return (
        <div className="chatroom-container">
          <div className="chat-list" ref={this.chatList}>
            {this.state.chats.map(chat => (
              <ChatBubble
                key={chat.id}
                name={chat.displayName}
                imgUrl={chat.profilePicUrl}
                text={chat.message}
                timestamp={chat.relativeTimestamp}
                absoluteTimestamp={chat.absoluteTimestamp}
                isSelf={this.props.loggedInUsername === chat.username}
              />
            ))}
          </div>
            <input type="text" 
            className="chatbox" 
            placeholder="enter submit" 
            value={this.state.message}
            onChange={e => { this.setState({ message: e.target.value }) }}
            onKeyDown={this.onChatEnter} />
        </div>
      )
    }
}

export default Chatroom

import React from 'react'
import Messages from './Messages'
import MessageUnreadUnstarred from './MessageUnreadUnstarred'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'
// import 'font-awesome/css/font-awesome.css'

class MessageList extends React.Component {

  //constructor?
  constructor(props) {
    super(props)
    this.state = { items: props.messages }
    console.log('this state from MessageList: ', this.state);
  }


  //render
  render() {
    return (
      <div>
        <MessageUnreadUnstarred props = { this.state.items } />
      </div>
    )
  }

}


export default MessageList

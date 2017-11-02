import React from 'react'

const MessageUnreadUnstarred = (props) => {
  let messages = props.props
  let filtered = []

  messages.filter((item) => {
    if (item.read == false) {
      filtered.push(item)
    }
  })

  // console.log('after filering: ', filtered);
    return (
    // MESSAGE: UNREAD: UNSTARRED
    <div class="row message unread">
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input type="checkbox" />
          </div>
          <div class="col-xs-2">
            <i class="star fa fa-star-o"></i>
          </div>
        </div>
      </div>
      <div class="col-xs-11">
        <a href="#">
          this is a message
        </a>
      </div>
    </div>
  )




}


export default MessageUnreadUnstarred

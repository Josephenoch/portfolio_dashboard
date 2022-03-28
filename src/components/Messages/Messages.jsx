import React, {useEffect, useRef} from 'react'

import { Box, makeStyles, Paper } from '@material-ui/core'
import { MessageComponent } from './MessageComponent'
import { MessageInbox } from './MessageInbox'
import { EmptyMessage } from './EmptyMessage'

const useStyles = makeStyles((theme) =>({
    messageContainer:{
      width:"100%",
      display:"flex",
      justifyContent:"space-around",
      maxHeight:"88.9vh",
      [theme.breakpoints.down("sm")]:{ 
        maxHeight:"93.5vh",
      }

    },
    messageList:{
      width:"32%",
      overflowY:"auto",
      [theme.breakpoints.down("sm")]:{
        width:"100%",
      }
    },
    messageContent:{
      width:"68%",
      maxWidth:"68%",
      overflowY:"auto",
      [theme.breakpoints.down("sm")]:{
        width:"100%",
        maxWidth:"100%",
        display:"none"
      }
    }
}))
export const Messages = (props) => {
  const classes = useStyles()
  const MessageContent = useRef()
  const MessageList = useRef()

  useEffect(()=>{
    if(window.innerWidth<=600){
     if(props.activeMessage){
        MessageContent.current.style.display="block"
        MessageList.current.style.display="none"
     }
     else{
      MessageContent.current.style.display="none"
      MessageList.current.style.display="block"
     }
    }
  },[props.activeMessage])
  return (
    <Box
      className={classes.messageContainer}
    >
      <Box
        className={classes.messageList}
        ref={MessageList}
      >
        <MessageComponent
          width={100}
          messages={props.messages}
          setActiveMessage={props.setActiveMessage}
        />
      </Box>
      <Box 
        ref={MessageContent}
        component={Paper}
        className={classes.messageContent}
      >
      {props.activeMessage ? 
        <MessageInbox
          user={props.activeMessage}
          setUser={props.setActiveMessage}
        />
      :
        <EmptyMessage/>
      }
      </Box>
    </Box>
  )
}

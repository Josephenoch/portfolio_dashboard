import React from 'react'

import { Box, makeStyles, Paper } from '@material-ui/core'
import { MessageComponent } from './MessageComponent'
import { MessageInbox } from './MessageInbox'

const useStyles = makeStyles(() =>({
    messageContainer:{
      width:"100%",
      display:"flex",
      justifyContent:"space-around",
      height:"88.9vh",

    },
    messageList:{
      width:"32%",
      overflowY:"auto",
    },
    messageContent:{
      width:"68%",
      overflowY:"auto",
    }
}))
export const Messages = (props) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.messageContainer}
    >
      <Box
        className={classes.messageList}
      >
        <MessageComponent
          width={100}
          messages={props.messages}
          setActiveMessage={props.setActiveMessage}
        />
      </Box>
      <Box 
        component={Paper}
        className={classes.messageContent}
      >
      <MessageInbox
        user={props.activeMessage}
      />
      </Box>
    </Box>
  )
}

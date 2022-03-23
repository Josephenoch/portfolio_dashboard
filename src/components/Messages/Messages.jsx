import React from 'react'

import { Box, makeStyles, Paper } from '@material-ui/core'
import { MessageComponent } from './MessageComponent'

const useStyles = makeStyles(() =>({
    messageContainer:{
      width:"100%",
      display:"flex",
      justifyContent:"space-around",
      height:"88.9vh",
      // overflow:"clip"
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
export const Messages = () => {
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
          
        />
      </Box>
      <Box 
        component={Paper}
        className={classes.messageContent}
      >
      

      </Box>
    </Box>
  )
}

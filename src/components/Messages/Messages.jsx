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
          rows={props.rows}
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

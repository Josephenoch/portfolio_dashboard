import { Box, makeStyles, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { InboxHeader } from './InboxHeader'

const useStyles = makeStyles((theme) => ({
  userDetailsText:{
    marginLeft:"10px",
    width:"200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
} 
}))
export const MessageInbox = (props) => {
  const classes = useStyles()
  return (
    <Box 
      style={{
        margin:"30px",
      }}
    >
      <Box style={{marginBottom:30}}>
        <InboxHeader user={props.user}/>
      </Box>
      <Divider/>
      <Box>
        <Box
          style={{
            margin:"20px 0 0 20px",
          }}
        >
            <Typography
              variant="h4"
            >
              {props.user.message[0].title.toUpperCase()}
            </Typography>
        </Box>
        <Box 
          style={{
            margin:"20px 20px 0 20px",
          }}
        >
          <Typography
              color="textSecondary"
              variant="body1"
              style={{
                textAlign:"justify"
              }}
            >
            {props.user.message[0].content}
            </Typography>
        </Box>
      </Box>
    </Box>
  )
}

import { Box, makeStyles, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { InboxHeader } from './InboxHeader'

const useStyles = makeStyles((theme) => ({
  rootContainer:{
    margin:"30px",
  },
  titleContainer:{
    [theme.breakpoints.up("md")]:{
      margin:"20px 0 0 20px",
    }
  },
  contentContainer:{
    [theme.breakpoints.up("md")]:{
      margin:"20px 20px 0 20px",
    }
  }
}))
export const MessageInbox = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.rootContainer}>
      <Box style={{marginBottom:30}}>
        <InboxHeader user={props.user} setUser={props.setUser}/>
      </Box>
      <Divider/>
      <Box>
        <Box className={classes.titleContainer}>
            <Typography
              variant="h4"
            >
              {props.user.message[0].title.toUpperCase()}
            </Typography>
        </Box>
        <Box className={classes.contentContainer}>
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

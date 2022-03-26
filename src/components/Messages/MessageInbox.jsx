import { Avatar, Box, Grid, Typography, makeStyles } from '@material-ui/core'
import { DateRange } from '@material-ui/icons'
import React from 'react'

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
        marginTop:"30px"
      }}
    >
      <Grid container>
        <Grid item>
            <Avatar alt={`${props.user.firstName} ${props.user.lastName}`} src={props.user.avatar} />
        </Grid >
        <Grid item>
            <Typography 
                variant="body2"  
                className={classes.userDetailsText}
            >
                    {`${props.user.firstName} ${props.user.lastName}`}
            </Typography>
            <Typography 
                variant="body2"
                className={classes.userDetailsText}
            >
                    {props.user.email}
            </Typography>
        </Grid >
        <Grid item xs></Grid>
        <Grid item>
          <DateRange
            style={{
              marginTop:"12px"
            }}
          />
          <Typography
            style={{
              display:"inline-block"
            }}
          >
            - { String(props.user.message[0].date).slice(4,25)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

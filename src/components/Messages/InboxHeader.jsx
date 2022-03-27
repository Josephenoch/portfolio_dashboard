import React from 'react'
import { Avatar, Grid, Typography, makeStyles} from '@material-ui/core'
import { DateRange } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    userDetailsText:{
      marginLeft:"10px",
      width:"200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    } 
}))

export const InboxHeader = (props) => {
  const classes = useStyles()
  return (
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
        <Grid item  >
          <DateRange/>
        </Grid>
        <Grid item style={{marginRight:"10px"}}>
          <Typography
            style={{
              display:"inline-block"
            }}
          >
            - { `${String(props.user.message[0].date).slice(4,15)} | ${String(props.user.message[0].date).slice(16,25)}`}
          </Typography>
        </Grid>
    </Grid>
  )
}

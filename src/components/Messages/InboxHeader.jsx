import React from 'react'
import { Avatar, Grid, Typography, makeStyles, Box, IconButton} from '@material-ui/core'
import { ArrowBackSharp, DateRange } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    userDetailsText:{
      marginLeft:"10px",
      width:"200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    } ,
    backButton:{
      [theme.breakpoints.up("md")]:{
        display:"none"
      }
    }
}))

export const InboxHeader = (props) => {
  const classes = useStyles()
  return (
    <Box>
      <IconButton 
        className={classes.backButton}
        onClick={() => props.setUser(null)}
      >
        <ArrowBackSharp/>
      </IconButton>
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
          {window.innerWidth>600?<Grid item  >
            <DateRange/>
          </Grid>:null}
          <Grid item style={{marginRight:"10px"}}>
            <Typography
              style={{
                display:"inline-block"
              }}
            >
              { `${String(props.user.message[0].date).slice(4,15)} | ${String(props.user.message[0].date).slice(16,25)}`}
            </Typography>
          </Grid>
      </Grid>
    </Box>
  )
}

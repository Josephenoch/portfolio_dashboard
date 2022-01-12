import React from 'react'
import {Paper, Card, CardContent, Typography, makeStyles, Grid} from "@material-ui/core"
import {Message, ArrowDownward, People} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    root:{
        height:"100%",
        width:"25%",
        borderRadius: "30px",
        minWidth:"250px",
        [theme.breakpoints.down("sm")]:{
            height: "100%",
            minWidth: "110px",
        }
    },
    cardContent: { 
        width: "100%", 
        height: "100%", 
        paddingLeft: "20px",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
        
    },

    circles:{
        backgroundColor:"rgba(255, 255, 255, 0.1)",
        position: "absolute", 
        width:200,
        height:200, 
        borderRadius: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "25%",
            height: "25vh",
            minWidth: "150px",
        }
    },
    iconStyle:{
        fontSize: 40, 
        marginBottom: "10px", 
        marginTop: "30px", 
        color: "white",
        [theme.breakpoints.down("sm")]: {
            fontSize:20,
            marginTop: "0px",
        }
    },
    contentP:{
        color: "white", 
        fontSize: 24,
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
        }
    },
    numberP:{
        color: "white", 
        fontSize: 36, 
        marginBottom: "10px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 18
       }
    },
}))
const AnalyticsCard = (props) => {
    const classes = useStyles()
    var message, icon, color
    if(props.type===1){
        message = "New Message"
        icon = <Message className={classes.iconStyle}/>
        color = "linear-gradient(90deg, rgba(198,148,249,1) 0%, rgba(171,100,244,1) 100%)"
    }
    else if(props.type===2){
        message = "CV Downloads"
        icon = <ArrowDownward className={classes.iconStyle} />
        color = "linear-gradient(90deg, rgba(104,102,233,1) 0%, rgba(104,102,233,1) 100%)"
    }
    else    {
        message = "Weekly Visitors"
        icon = <People className={classes.iconStyle}/>
        color = "linear-gradient(90deg, rgba(254,182,131,1) 0%, rgba(255,137,147,1) 100%)"
    }
    return (
            <Card raised className={classes.root} component={Paper} elevation={0}>
                <CardContent style={{ background:color}}>
                   {icon}
                    <Typography variant="body2" className={classes.contentP} >
                      {message}
                    </Typography>
                    <Typography variant="body2" className={classes.numberP}>
                        {props.number}
                    </Typography>
                <Typography variant="body2" className={classes.contentP} style={{ marginTop: "10px"}}>
                        Increased by {props.percent}%
                    </Typography>
                    
                </CardContent>
                <Grid container style={{ position: "relative", width:"50%" , height:"50%"}}>
                    <Grid item style={{bottom:"0", left:"150%" }} className={classes.circles}></Grid>
                    <Grid item style={{ bottom: "-100px", left: "120%" }} className={classes.circles}></Grid>
                </Grid>
            </Card> 
    )
}

export default AnalyticsCard
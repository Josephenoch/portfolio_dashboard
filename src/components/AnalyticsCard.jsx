import React from 'react'
import { Card, CardContent, Typography, makeStyles, Grid} from "@material-ui/core"
import {Message, ArrowDownward, People} from "@material-ui/icons"

const useStyles = makeStyles({
    root:{
        height:"320.13px",
        width:"450.69px",
        borderRadius: "30px"
    },
    circles:{
        backgroundColor:"rgba(255, 255, 255, 0.1)",
        position: "absolute", 
        height: "210px", 
        width: "210px", 
        borderRadius: "50%",
    },
    iconStyle:{
        fontSize: 40, 
        marginBottom: "10px", 
        marginTop: "30px", 
        color: "white"
    }
})
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
        <div>
            <Card raised className={classes.root}>
                <CardContent style={{width:"100%", height:"100%", paddingLeft:"20px", background:color}}>
                   {icon}
                    <Typography variant="body2" style={{color:"white", fontSize:24}}>
                      {message}
                    </Typography>
                    <Typography variant="body2" style={{ color: "white", fontSize: 36, marginBottom:"20px" }}>
                        {props.number}
                    </Typography>
                    <Typography variant="body2" style={{ color: "white", fontSize: 24, marginTop: "20px" }}>
                        Increased by {props.percent}%
                    </Typography>
                    
                </CardContent>
                <Grid container style={{ position: "relative" }}>
                    <Grid item style={{bottom:"20px", left:"330px" }} className={classes.circles}></Grid>
                    <Grid item style={{ bottom: "-100px", left: "270px" }} className={classes.circles}></Grid>
                </Grid>
            </Card> 
        </div>
    )
}

export default AnalyticsCard
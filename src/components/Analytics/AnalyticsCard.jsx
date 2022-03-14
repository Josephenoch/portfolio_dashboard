import React from 'react'
import {Card, CardContent, Typography, makeStyles, Grid} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    root:{
        height:"80%",
        width:"100%",
        borderRadius: "30px",
        minWidth:"250px",
        transition:"transform 0.2s ease-in-out",
        [theme.breakpoints.down("md")]:{
            margin:"15px 0",
            width:"100%",
        },
        '&:hover':{
            transform:"scale(1.02,1.02)"
        }
    },
    cardContent: { 
        width: "100%", 
        height: "100%", 
        paddingLeft: "20px",
        [theme.breakpoints.down("sm")]: {
            paddingTop:"40px"
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
export const AnalyticsCard = (props) => {
    const classes = useStyles()
    return (
            <Card raised className={classes.root} elevation={0}>
                <CardContent className= {classes.cardContent}style={{ background:props.color, height:"100%"}}>
                   {props.icon}
                    <Typography variant="body2" className={classes.contentP} >
                      {props.message}
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

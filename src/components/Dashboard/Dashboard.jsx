import React from 'react'
import {AnalyticsCard} from "../Analytics/AnalyticsCard"
import {MessageComponent} from "../Messages/MessageComponent"
import { makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"
import {UserImage} from './UserImage'
import {Details} from "./Details"
import {Message, ArrowDownward, People} from "@material-ui/icons" 
import {Box, Paper} from "@material-ui/core"




const useStyles = makeStyles((theme) =>({
    general:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems:"center", 
        width: "100%",
        [theme.breakpoints.up("lg")]: {
            height: "100%",
        },   
    },
    card:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems:"center", 
        width: "100%",
        [theme.breakpoints.up("lg")]: {
            height: "300px",
        },   
    },
    link:{
        textDecoration: 'none', 
        width:"30%",
        [theme.breakpoints.down("md")]: {
            width:"80%",
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
}))
export const Dashboard = (props) => {
    const classes = useStyles()
    const data = [
        {
            id:1,
            message:"Weekly Visitors",
            number:200,
            percent:10,
            color1:"rgba(136, 132, 216,1)",
            color2:"rgb(217, 130, 207,1)",

            icon:<People className={classes.iconStyle}/>,
        },
        {
            id:2,
            message:"CV Downloads",
            number:400,
            percent:25,
            color1:"rgba(130, 202, 157,1)",
            color2:"rgba(50, 97, 113, 1)",
            icon:<ArrowDownward className={classes.iconStyle}/>,
        },
        {
    
            id:3,
            message:"Messages",
            number:250,
            percent:40,
            color1:"rgba(198,148,249,1)",
            color2:"rgb(255, 141, 219, 1)",
            icon:<Message className={classes.iconStyle}/>,
        }
    ]
   
    return (
        <Box>
            <Box style={{marginTop:-10}}></Box>
            <Box>
                <UserImage/>        
            </Box>
            <Box className={classes.general}> 
                <Details name="About"/>
            </Box>
            <Box className={classes.card}  style={{overflow:"auto"}}> 
                {data.map(datum =>{
                    return(
                        <Link key={datum.id} to={`/Analytics`} className={classes.link}>
                            <AnalyticsCard 
                                message={datum.message}
                                number={datum.number}
                                percent={datum.percent}
                                color={`linear-gradient(90deg, ${datum.color1}0%, ${datum.color2} 100%)`}
                                icon={datum.icon}
                            />
                        </Link>
                    )
                })}
            </Box>
            <Box className={classes.general} style={{ marginTop:"10vh",}}> 
                <Details name="Interest"/>
            </Box>

           
            <Box
                
                style={{ 
                    width: "100%", 
                    display: "flex", 
                    justifyContent: "center", 
                    marginTop: "94px",
                    maxHeight:"50vh",
                    overflowY:"auto"
                }} 
                elevation={0}
                id="messageComponent"
                >
                <MessageComponent 
                    width={95}
                    component={Paper} 
                    rows={props.rows}
                />
            </Box>
        
         </Box>
    )
}

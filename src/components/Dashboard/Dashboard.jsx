import React from 'react'
import AnalyticsCard from "./AnalyticsCard"
import BasicTable from "./BasicTable"
import { makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"
import UserImage from './UserImage'
import Details from "./Details"
import {Message, ArrowDownward, People} from "@material-ui/icons"

const useStyles = makeStyles((theme) =>({
    general:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems:"center", 
        width: "100%",
        [theme.breakpoints.up("lg")]: {
        height: "300px",}
    },
    link:{
        textDecoration: 'none', 
        width:"30%"
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
const Dashboard = () => {
    const classes = useStyles()
    return (
        <div>
            <div style={{marginTop:-10}}></div>
            <div>
                <UserImage/>        
            </div>
            <div className={classes.general}> 
                <Details name="About"/>
            </div>
            <div className={classes.general} style={{overflow:"auto"}}> 
                <Link to={"/Graph1"} className={classes.link} >
                    <AnalyticsCard 
                        message={"Weekly Visitors"} 
                        number={500} 
                        percent={20} 
                        color={"linear-gradient(90deg, rgba(254,182,131,1) 0%, rgba(255,137,147,1) 100%)"}
                        icon = {<People className={classes.iconStyle}/>}
                    />
                </Link>
                <Link to={"/Graph2"} className={classes.link}>
                    <AnalyticsCard  
                        message={"CV Downloads"}
                        number={500} 
                        percent={20} 
                        color={"linear-gradient(90deg, rgba(104,102,233,1) 0%, rgba(104,102,233,1) 100%)"}
                        icon = {<ArrowDownward className={classes.iconStyle}/>}
                    />
                </Link>
                <Link to={"/Graph3"} className={classes.link}>
                    <AnalyticsCard 
                        message={"New Message"}
                        number={500} 
                        percent={20} 
                        color={"linear-gradient(90deg, rgba(198,148,249,1) 0%, rgba(171,100,244,1) 100%)"}
                        icon = {<Message className={classes.iconStyle}/>}
                    />
                </Link>
                </div>
            <div className={classes.general} style={{ marginTop:"10vh",}}> 
                <Details name="Interest"/>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "94px" }} elevation={0}>
                <BasicTable/>
            </div>
         </div>
    )
}

export default Dashboard
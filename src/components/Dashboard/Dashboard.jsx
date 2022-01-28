import React from 'react'
import AnalyticsCard from "./AnalyticsCard"
import BasicTable from "../Table"
import {makeStyles} from "@material-ui/core"
import UserImage from './UserImage'
import About from "./About"

const useStyles = makeStyles((theme) =>({
    general:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems:"center", 
        width: "100%",
        height: "100%",
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
                <About/>
            </div>
            <div className={classes.general} style={{overflow:"auto"}}> 
                    <AnalyticsCard type={1} number={500} percent={20} />
                    <AnalyticsCard type={2} number={500} percent={20} />
                    <AnalyticsCard type={3} number={500} percent={20} />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "94px" }} elevation={0}>
                <BasicTable/>
            </div>
         </div>
    )
}

export default Dashboard
import React from 'react'
import AnalyticsCard from "./AnalyticsCard"
import BasicTable from "./Table"
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) =>({
    root:{
        display: "flex", 
        justifyContent: "space-around", 
        width: "100%",
        overflow: "auto",
        height: "100%"}
       
}))
const Dashboard = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.root}>
                    <AnalyticsCard type={1} number={500} percent={20} />
                    <AnalyticsCard type={2} number={500} percent={20} />
                    <AnalyticsCard type={3} number={500} percent={20} />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop:"94px"}}>
                <BasicTable/>
            </div>
         </div>
    )
}

export default Dashboard
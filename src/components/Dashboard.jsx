import React from 'react'
import AnalyticsCard from "./AnalyticsCard"
import{Grid} from "@material-ui/core"
const Dashboard = () => {
    return (
        <div > 
            <Grid container style={{ margin:100}} spacing={2}>
                <Grid item>
                    <AnalyticsCard type={1} number={500} percent={20} lg={4} md={6} xs={12}/>
                </Grid>
                <Grid item>
                    <AnalyticsCard type={2} number={500} percent={20} />
                </Grid>
                <Grid item>
                    <AnalyticsCard type={3} number={500} percent={20} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
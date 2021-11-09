import React from 'react'
import AnalyticsCard from "./AnalyticsCard"
const Dashboard = () => {
    return (
        // <div styel={{ width: "100%"}}>
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div>
                    <AnalyticsCard type={1} number={500} percent={20} lg={4} md={6} xs={12}/>
                </div>
                <div>
                    <AnalyticsCard type={2} number={500} percent={20} />
                </div>
                <div>
                    <AnalyticsCard type={3} number={500} percent={20} />
                </div>
            </div>
            // </div>
    )
}

export default Dashboard
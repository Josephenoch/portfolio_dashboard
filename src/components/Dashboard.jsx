import React from 'react'
import AnalyticsCard from "./AnalyticsCard"
import BasicTable from "./Table"
const Dashboard = () => {
    return (
        <div>
            <div style={{ display:"flex", justifyContent: "space-around", width: "100%"}}>
                <div>
                    <AnalyticsCard type={1} number={500} percent={20} />
                </div>
                <div>
                    <AnalyticsCard type={2} number={500} percent={20} />
                </div>
                <div>
                    <AnalyticsCard type={3} number={500} percent={20} />
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop:"94px"}}>
                <BasicTable/>
            </div>
         </div>
    )
}

export default Dashboard
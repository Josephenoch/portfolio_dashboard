import { Box, Paper, makeStyles, Typography } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import { subDays } from 'date-fns'
import { Graph } from './Graph'
import { ShowChart } from './ShowChart'

import { AnalyticsDuration } from './AnalyticsDuration'
import { AnalyticsCard } from './AnalyticsCard'
import { People, ArrowDownward, Message } from '@material-ui/icons'


const data = []

for(let num = 1000; num>=0; num--){
    data.push({
        date:subDays(new Date(), num).toISOString().slice(0,10),
        Message: Math.floor(Math.random() * 10),
        CV: Math.floor(Math.random() * 10),
        Visitors: Math.floor(Math.random() * 10)
    })
}

const useStyle = makeStyles((theme)=>({
    parentContainer:{
        display:"flex",
        width:"100%",
        justifyContent:"center",
        flexWrap:"wrap",

    },
    graphContainer:{
        width:"98%",
        marginTop:"20px",
        marginBottom:"50px",
        [theme.breakpoints.down("md")]:{
            marginTop:"40px", 
            width:"100%"
        }
    },
    cardContainer:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems:"center", 
        width: "100%",
        [theme.breakpoints.up("lg")]: {
            height: "100%",
        }
    },
    card:{
        width:"30%",
        [theme.breakpoints.down("md")]: {
            width:"80%",
        }
    }
}))

export const Analytics = () => {
    const classes = useStyle()
    
    
    
    const [noOfData, setNoOfData] = useState(10)
    const [showChart, setShowChart] = useState([
        {
            name:"Message",
            display:true
        }, 
        {
            name:"CV",
            display:true
        },
        {
            name:"Visitors",
            display:true
        }
    ])
    const [dataToDisplay, setDataToDisplay] = useState(data.slice(0,noOfData))
    const [total, setTotal] = useState([
        {
            name:"Message",
            total:0
        },
        {
            name:"CV",
            total:0
        },
        {
            name:"Visitors",
            total:0
        }
    ])
    const analyticsData = [
        {
            id:1,
            message:"Weekly Visitors",
            number:total[0].total,
            percent:10,
            color1:"rgba(136, 132, 216,1)",
            color2:"rgb(217, 130, 207,1)",
    
            icon:<People className={classes.iconStyle}/>,
        },
        {
            id:2,
            message:"CV Downloads",
            number:total[1].total,
            percent:25,
            color1:"rgba(130, 202, 157,1)",
            color2:"rgba(50, 97, 113, 1)",
            icon:<ArrowDownward className={classes.iconStyle}/>,
        },
        {
    
            id:3,
            message:"Messages",
            number:total[2].total,
            percent:40,
            color1:"rgba(198,148,249,1)",
            color2:"rgb(255, 141, 219, 1)",
            icon:<Message className={classes.iconStyle}/>,
        }
    ]
    const handleChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked

        const newArray=[...showChart]
        for(let i in newArray){
            if (newArray[i].name===name){
                const newObj = {...newArray[i],"display":checked}
                newArray[i] = newObj
                setShowChart(newArray)
                break
            }   
        }
    }
    useEffect(()=>{
        setDataToDisplay(data.slice(0,noOfData))
        const newArray = [
            {
                name:"Message",
                total:0
            },
            {
                name:"CV",
                total:0
            },
            {
                name:"Visitors",
                total:0
            }]
        for(let i in data.slice(0,noOfData)){
            newArray[0].total = newArray[0].total+data[i].Message
            newArray[1].total = newArray[1].total+data[i].CV
            newArray[2].total=newArray[2].total+data[i].Visitors
        }
        setTotal(newArray)
    },[noOfData])

 
    return (
        <Box className={classes.parentContainer}>
            
            <Paper elevation={10} className={classes.graphContainer}
            >
                <Typography
                    variant="h3"
                    style={{
                        margin:"0 0 20px 20px "
                    }}
                >
                    Analytics
                </Typography>
                <AnalyticsDuration
                    setNoOfData={setNoOfData}
                    noOfData={noOfData}
                />
                <ShowChart
                    showChart={showChart}
                    handleChange={handleChange}
                    
                />
                <Graph
                    data={dataToDisplay}
                    showChart={showChart}
                />
            </Paper>
            <Box className={classes.cardContainer}>
                    {analyticsData.map(datum=>{
                        return <Box className={classes.card}>
                                <AnalyticsCard
                                    message={datum.message}
                                    number={datum.number}
                                    percent={datum.percent}
                                    color={`linear-gradient(90deg, ${datum.color1}0%, ${datum.color2} 100%)`}
                                    icon={datum.icon}
                            
                                />
                            </Box>
                    })}
            </Box>
        </Box>
    )
}

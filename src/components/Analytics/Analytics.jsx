import { Box, Paper, makeStyles } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import { subDays } from 'date-fns'
import { Graph } from './Graph'
import { ShowChart } from './ShowChart'
import { RawData } from './RawData'


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
        [theme.breakpoints.down("md")]:{
            width:"100%"
        }
    },
    showChartContainer:{
        width:"37.5%",
        marginTop:"20px",
        height:"28vh",
        marginBottom:"20px",
        [theme.breakpoints.down("md")]:{
            width:"100%"
        }
    },
    rawDataContainer:{
        width:"59.5%",
        marginTop:"20px",
        marginLeft:"1%",
        marginBottom:"20px",
        [theme.breakpoints.down("md")]:{
            width:"100%"
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
        console.log(newArray)
        setTotal(newArray)
    },[noOfData])

 
    return (
        <Box className={classes.parentContainer}>
            <Paper elevation={10} className={classes.graphContainer}
            >
                <Graph
                    data={dataToDisplay}
                    showChart={showChart}
                />
            </Paper>
            <Paper elevation={10} className={classes.showChartContainer}
            >  
                <ShowChart
                    total={total}
                    showChart={showChart}
                    handleChange={handleChange}
                    
                />
            </Paper>
            <Paper elevation={10} className={classes.rawDataContainer}
            >
                <RawData
                    data={data}
                    total={total}
                    noOfData={noOfData}
                    setNoOfData={setNoOfData}
                />   
            </Paper>
        </Box>
    )
}

import { Box, Paper, Typography, FormControlLabel, Switch, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import { subDays } from 'date-fns'
import { Graph } from './Graph'


const data = []

for(let num = 1000; num>=0; num--){
    data.push({
        date:subDays(new Date(), num).toISOString().slice(0,10),
        Message: Math.floor(Math.random() * 10),
        CV: Math.floor(Math.random() * 10),
        Visitors: Math.floor(Math.random() * 10)
    })
}
var emptyTotal = [
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


export const Analytics = () => {
    const [noOfData, SetNoOfData] = useState(10)
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
    const [total, setTotal] = useState([...emptyTotal])
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
        <Box
            style={{
                display:"flex",
                width:"100%",
                justifyContent:"center",
                flexWrap:"wrap",

            }}
        >
            <Paper
                elevation={10}
                style={{
                    width:"98%",
                    marginTop:"20px"
                }}
            >
                <Graph
                    data={dataToDisplay}
                    showChart={showChart}
                />
            </Paper>
            <Paper
                    elevation={10}
                    style={{
                        width:"37.5%",
                        marginTop:"20px",
                        height:"28vh"
                    }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        style={{
                            margin:"20px 0 20px 20px "
                        }}
                    >
                        Edit Graph
                    </Typography>
                    <Box
                        style={{
                            marginLeft:"50px"
                        }}
                    >
                        {showChart.map(chart =>{
                            return(
                                <Box>
                                    <FormControlLabel 
                                        control={
                                            <Switch  
                                                color="primary" 
                                                checked={chart.display}  // the name is the same as the object name in the parent data
                                                onChange={handleChange}
                                                name={chart.name}  // the name is the same as the object name in the parent data
                                            />
                                        } 
                                    label={`Show ${chart.name}`} />   
                                </Box>
                            )
                        })
                    }
                       
                    </Box>
                </Box>
            </Paper>
            <Paper
                    elevation={10}
                    style={{
                        width:"59.5%",
                        marginTop:"20px",
                        marginLeft:"1%"
                    }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        style={{
                            margin:"20px 0 20px 20px "
                        }}
                    >
                        View Raw Data
                    </Typography>
                    <Box
                        style={{
                            display:"flex",
                            width:"100%"
                        }}
                    >
                        <Box
                            style={{
                                width:"30%",
                                marginLeft:"5%"
                            }}
                        >
                            {total.map(itemTot =>{
                                return(
                                    <Typography
                                        variant="body1"
                                    >
                                        {`${itemTot.name} total ${itemTot.total}`}
                                    </Typography>
                                )
                            })}
                        </Box>
                        <Box
                            style={{
                                width:"60%"
                            }}
                        >
                            <FormControl variant="outlined"  style={{minWidth: "100%"}}>
                                <InputLabel id="demo-simple-select-standard-label" shrink>Display data</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={noOfData}
                                    onChange={e=>SetNoOfData(e.target.value)}
                                    style={{
                                        width:"100%"
                                    }}
                                    label="Display Data"
                                >
                                    <MenuItem value={10}>10 Days</MenuItem>
                                    <MenuItem value={7}>Last Week</MenuItem>
                                    <MenuItem value={30}>Last Month</MenuItem>
                                    <MenuItem value={365}>Last Year</MenuItem>
                                    <MenuItem value={data.length-1}>All Time</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

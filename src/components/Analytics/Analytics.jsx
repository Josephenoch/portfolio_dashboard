import { Box, Paper, Typography, FormControlLabel, Switch } from '@material-ui/core'
import React,{useState} from 'react'
import { subDays } from 'date-fns'
import { Graph } from './Graph'


const data = []

for(let num = 10; num>=0; num--){
    data.push({
        date:subDays(new Date(), num).toISOString().slice(0,10),
        Message: Math.floor(Math.random() * 10),
        CV: Math.floor(Math.random() * 10),
        Visitors: Math.floor(Math.random() * 10)
    })
}
export const Analytics = () => {
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
                    data={data}
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

                </Box>
            </Paper>
        </Box>
    )
}

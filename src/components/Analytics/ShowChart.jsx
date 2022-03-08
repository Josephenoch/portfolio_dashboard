import React from 'react'

import  {Box, Typography, FormControlLabel, Switch} from "@material-ui/core"

export const ShowChart = (props) => {
return (
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
            {props.showChart.map(chart =>{
                return(
                    <Box>
                        <FormControlLabel 
                            control={
                                <Switch  
                                    color="primary" 
                                    checked={chart.display}  // the name is the same as the object name in the parent data
                                    onChange={props.handleChange}
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
)
}

import React from 'react'

import { Box, Typography, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

export const RawData = (props) => {
    return (
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
                    {props.total.map(itemTot =>{
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
                            value={props.noOfData}
                            onChange={e=>props.setNoOfData(e.target.value)}
                            style={{
                                width:"100%"
                            }}
                            label="Display Data"
                        >
                            <MenuItem value={10}>10 Days</MenuItem>
                            <MenuItem value={7}>Last Week</MenuItem>
                            <MenuItem value={30}>Last Month</MenuItem>
                            <MenuItem value={365}>Last Year</MenuItem>
                            <MenuItem value={props.data.length-1}>All Time</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

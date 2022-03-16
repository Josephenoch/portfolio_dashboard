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
                                {itemTot.name}
                            </Typography>
                        )
                    })}
                </Box>
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
                                {itemTot.total}
                            </Typography>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

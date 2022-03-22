import React from 'react'

import  {Box, FormControlLabel, Checkbox, makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
    container:{
        marginTop:20,
        marginBottom:20,
        display:"flex",
        justifyContent:"center",
        width:"100%"
    },
}))

export const ShowChart = (props) => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            {props.showChart.map((chart,i) =>{
                return(
                    <FormControlLabel
                        key={chart.name} 
                        control={
                            <Checkbox
                                checked={chart.display}
                                disabled={props.checkedFor[i]}
                                onChange={props.handleChange}
                                name={chart.name}
                            />
                        } 
                        label={`${chart.name}`}  
                    />   
                )
            })}
        </Box>
    )
}

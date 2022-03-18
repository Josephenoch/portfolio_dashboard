import React,{useEffect, useState} from 'react'

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
    const [checkedFor, setCheckedFor] = useState([false,false,false])

    useEffect(()=>{
        var found  =0
        var arr = [...checkedFor]
        for(let i in props.showChart){
            if (props.showChart[i].display===false){
                found++
                arr[i] = true
            }
        }
        if(found>1){
            arr = arr.map(item=> !item)
        }
        else{
            arr = [false, false, false]
        }
        setCheckedFor(arr)
    },[props.showChart])

    return (
        <Box className={classes.container}>
            {props.showChart.map((chart,i) =>{
                return(
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={chart.display}
                                disabled={checkedFor[i]}
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

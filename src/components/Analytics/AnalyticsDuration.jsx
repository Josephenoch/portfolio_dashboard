import React from 'react'
import { useTheme, makeStyles, Button } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    container:{
        marginTop:20,
        marginBottom:20,
        display:"flex",
        justifyContent:"center",
        width:"100%"
    },
    item:{
        marginLeft:20,
        width:100,
        [theme.breakpoints.down("md")]:{
            "&:nth-of-type(1n+4)":{
                display:"none"
            }
        }
    }

}))

export const AnalyticsDuration = (props) => {
    const theme = useTheme()
    const timeFrame = [
        {
            name:"7 Days",
            value:7
        },
        {
            name:"10 Days",
            value:10
        },
        {
            name:"1 Month",
            value:30
        },
        {
            name:"3 Months",
            value:90
        },
        {
            name:"6 Months",
            value:180
        },
        {
            name:"1 Year",
            value:365
        },
    ]
    const handleClick = (value) =>{
        console.log(value)
        props.setNoOfData(value)
    }
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {timeFrame.map(time=>{
                return <Button
                            key={time.value}
                            style={{
                                background:time.value===props.noOfData? theme.palette.primary.main:""
                            }}
                            value={time.value}
                            className={classes.item}
                            onClick={handleClick.bind(this, time.value)}
                        >{time.name}</Button>
            })}
        </div>
    )
}

import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    container:{
        width:"40%",
        backgroundColor: "white",
        padding:"20px",
        borderRadius:"30px",
        height:"70%",
    }
}))
const OtherSkills = () => {
    const classes = useStyles()
  return (
    <div className={classes.container}>OtherSkills</div>
  )
}
export default  OtherSkills
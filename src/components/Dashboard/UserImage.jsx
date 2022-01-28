import React from "react";

import userImg from "../../assets/joseph.jpg"

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
    div:{
        position:"relative", 
        height:"40vh", 
        width:"100%",
        background:"linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url("+userImg+")",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        marginBottom:50,
        borderRadius:"0px 0px 50px 0px",
        [theme.breakpoints.down("md")]:{
            height:"25vh"
        }
    }
}))
const UserImage = (() =>{
    const classes = useStyles()
    return(
        <div className={classes.div}>
        </div>
        )
})


export default UserImage
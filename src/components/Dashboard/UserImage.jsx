import React from "react";

import userImg from "../../assets/joseph.jpg"

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
    div:{
        position:"relative", 
        height:"40vh", 
        width:"100%",
        background:"linear-gradient(0deg, rgba(111,227,255,0.3) 0%, rgba(47,199,245,0.3) 35%), url("+userImg+")",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        marginBottom:50,
        borderRadius:"0px 0px 50px 0px",
        [theme.breakpoints.down("md")]:{
            height:"50vh"
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
import React from "react";


import { makeStyles } from "@material-ui/core";

export const UserImage = ((props) =>{
    const useStyles = makeStyles((theme) =>({
        div:{
            position:"relative", 
            height:"60vh", 
            width:"100%",
            background:`linear-gradient(0deg, rgba(111,227,255,0.3) 0%, rgba(47,199,245,0.3) 35%)`,
            backgroundAttachment:"fixed",
            backgroundSize:"cover",
            marginBottom:50,
            borderRadius:"0px 0px 50px 0px",
            [theme.breakpoints.down("md")]:{
                height:"50vh"
            }
        }
    }))
    const classes = useStyles()
    return(
        <div className={classes.div}>
        </div>
        )
})
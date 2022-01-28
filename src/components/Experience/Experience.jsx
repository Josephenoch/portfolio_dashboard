import React from "react"
import ExperienceHeader from "./ExperienceHeader"
import { makeStyles, IconButton, Typography } from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";

const useStyles = makeStyles((theme) =>({
    addIcon:{
        position:"absolute", 
        top:"16.5vh",
        right:100,
        marginBottom:0,
        [theme.breakpoints.only("md")]:{
            top:"22.5vh",
        },
        [theme.breakpoints.down("sm")]: {
            top:"18.5vh",
          }
    }
    
}))

const Experience = ()=>{    
    const styles= useStyles()
    return(
        <div>
            <ExperienceHeader/>
            <div className = {styles.addIcon}>
            <IconButton>
                <AddCircle style={{color:"rgba(111,227,255,1)", fontSize:50}}/>  
            </IconButton>   
            </div> 
        </div>
    )
}

export default Experience


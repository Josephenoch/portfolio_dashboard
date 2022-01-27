import React from "react"
import ExperienceHeader from "./ExperienceHeader"
import { makeStyles, Typography } from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";

const useStyles = makeStyles((theme) =>({
    addIcon:{
        position:"absolute", 
        top:145,
        right:30,
        marginBottom:0,
    }
}))

const Experience = ()=>{    
    const styles= useStyles()
    return(
        <div>
            <ExperienceHeader/>
            <div className = {styles.addIcon}>
                <AddCircle/>     
            </div> 
        </div>
    )
}

export default Experience


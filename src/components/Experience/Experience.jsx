import React from "react"
import ExperienceHeader from "./ExperienceHeader"
import { makeStyles, Typography } from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";

const useStyles = makeStyles((theme) =>({
    addIcon:{
        position:"absolute", 
        top:132,
        right:100,
        marginBottom:0,
    }
}))

const Experience = ()=>{    
    const styles= useStyles()
    return(
        <div>
            <ExperienceHeader/>
            <div className = {styles.addIcon}>
                <AddCircle style={{color:"rgba(111,227,255,1)", fontSize:50}}/>     
            </div> 
        </div>
    )
}

export default Experience


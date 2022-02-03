import React from "react"
import ExperienceHeader from "./ExperienceHeader"
import SearchBar from "./SearchBar";
import { makeStyles, IconButton, Typography } from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";
import DataTable from "../DataTable";

const useStyles = makeStyles((theme) =>({
    rootContainer:{
        height:"88vh"
    },
    addIcon:{
        position:"absolute", 
        top:"16.5vh",
        right:100,
        marginBottom:0,
        [theme.breakpoints.down("md")]:{
            top:"7vh",
        },
    },
    mainSection:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"94%",
        justifyContent:"center",
    }
    
}))

const Experience = ()=>{    
    const classes= useStyles()
    return(
        <div className={classes.rootContainer} >
            <ExperienceHeader/>
            <div className = {classes.addIcon}>
            <IconButton>
                <AddCircle style={{color:"rgba(111,227,255,1)", fontSize:50}}/>  
            </IconButton>   
            </div>
            <div className={classes.mainSection}>
                <SearchBar/>
                <DataTable/>   
            </div> 
            

        </div>
    )
}

export default Experience


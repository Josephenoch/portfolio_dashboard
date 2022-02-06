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
    addIconDiv:{
        position:"absolute", 
        top:"16.5vh",
        right:"7%",
        marginBottom:0,
        [theme.breakpoints.down("md")]:{
            right:"5%",
            top:"11vh",
        },
    },
    addIcon:{
        color:"rgba(111,227,255,1)",
        fontSize:50,
        [theme.breakpoints.down("md")]:{
            fontSize:30,
        }
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
            <div className = {classes.addIconDiv}>
                <IconButton>
                    <AddCircle className={classes.addIcon}/>  
                </IconButton>   
            </div>
            <div className={classes.mainSection}>
                <SearchBar fontSize="small"/>
                <DataTable/>   
            </div> 
            

        </div>
    )
}

export default Experience


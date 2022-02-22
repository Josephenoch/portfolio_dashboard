import React from "react"
import ExperienceHeader from "../PageHeader"
import ExperienceSearchBar from "./ExperienceSearchBar";
import ExperienceDataTable from "./ExperienceDataTable";
import { makeStyles, IconButton,} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";


const useStyles = makeStyles((theme) =>({
    rootContainer:{
        height:"88vh",
        width: "100%"
    },
    addIconDiv:{
        position:"absolute", 
        top:"16.5vh",
        right:"1.5%",
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
        width:"100%",
        justifyContent:"center",
    },
    
}))

const Experience = ()=>{    
    
    const classes= useStyles()
    return(
        <div className={classes.rootContainer} >
            <ExperienceHeader title="Experience"/>
            <div className = {classes.addIconDiv}>
                <IconButton>
                    <AddCircle className={classes.addIcon}/>  
                </IconButton>   
            </div>
            <div className={classes.mainSection}>
                <ExperienceSearchBar fontSize="small"/>
                <ExperienceDataTable/>   
            </div> 
            

        </div>
    )
}

export default Experience


import React from 'react';
import PageHeader from '../PageHeader';
import EducationDataTable from './EducationDataTable';
import EducationSearchBar from './EducationSearchBar';
import { makeStyles, IconButton,} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";

const useStyles = makeStyles((theme) =>({
    rootContainer:{
        height:"88vh"
    },
    addIconDiv:{
        position:"absolute", 
        top:"16.5vh",
        right:"1.5%",
        marginBottom:0,
        [theme.breakpoints.down("md")]:{
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


const Education = () => {
    const classes = useStyles()
    return (
        <div className={classes.rootContainer} >
            <PageHeader title="Education"/>
            <div className = {classes.addIconDiv}>
                <IconButton>
                    <AddCircle className={classes.addIcon}/>  
                </IconButton>   
            </div>
            <div className={classes.mainSection}>
                <EducationSearchBar fontSize="small"/>
                <EducationDataTable/>   
            </div> 
            

        </div>
    );
}
export default Education
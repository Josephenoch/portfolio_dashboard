import React from "react";
import {makeStyles} from "@material-ui/core";


import ExperienceData from "./ExperienceData"

const useStyles = makeStyles(() =>({
   
    rootContainer:{
        width:"94%",     
    },
    
    
}))

const ExperienceDataTable = (props) => {
    
    

    const classes = useStyles()
    return (
        <div className={classes.rootContainer}>
            {               
                props.experienceData.map((data) =>{

                    return( 
                        <ExperienceData 
                            key={data.id} 
                            data={data} 
                            experienceData={props.experienceData}
                            setExperienceData={props.setExperienceData} 
                            handleSave={props.handleSave}
                        />
                    )
                }) 
            }       
        </div>
    );
}

export default ExperienceDataTable

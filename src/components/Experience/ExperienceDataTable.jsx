import {React} from "react";
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
                props.experienceData.map((data, index) =>{

                    return( 
                        <ExperienceData 
                            key={data.id} 
                            data={data} 
                            editExperience={props.editExperience}
                            setEditExperience={props.setEditExperience}
                            handleDelete={props.handleDelete.bind(this, data.id)} 
                            handleChange={props.handleChange(index)}
                            btnDisabled={props.btnDisabled}
                            handleSave={props.handleSave}
                        />
                    )
                }) 
            }       
        </div>
    );
}

export default ExperienceDataTable

import {React} from "react";
import {makeStyles} from "@material-ui/core";
import EducationData from "./EducationData";



const useStyles = makeStyles((theme) =>({
  
    rootContainer:{
        width:"94%",     
    },
    
}))

const EducationDataTable = (props) => {
   
    
   const classes = useStyles()
    return (
        <div className={classes.rootContainer}>
           {props.educationData.map(data => {
              return( 
              <EducationData
                    key={data.id}
                    data={data}
                    setEducationData={props.setEducationData}
                    educationData = {props.educationData}                 
               />)
           })}
        </div>
    );
}

export default EducationDataTable

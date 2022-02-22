import {React, useState} from "react";
import {makeStyles} from "@material-ui/core";


import ExperienceData from "./ExperienceData"

const useStyles = makeStyles((theme) =>({
   
    rootContainer:{
        width:"94%",     
    },
    
    
}))

const ExperienceDataTable = () => {
    
    const [experienceData, setExperienceData] = useState([{
        "roleName" : "CEO",
        "id" : "1",
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "active" : false
    },
      {
        "roleName" : "Developer",
        "id" : "2",
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "active" : true
      },
      {
        "roleName" : "Thief",
        "id" : "3",
        "company" : "HiiT",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "active" : true
      }  
    ])

    const handleDelete = (id) => {
        setExperienceData(experienceData.filter( dat => dat.id !== id))
    
    }
    

   const classes = useStyles()
    return (
        <div className={classes.rootContainer}>
            {
                experienceData.map(data =>{
                    return( 
                        <div>
                        <ExperienceData data={data} handleDelete={handleDelete.bind(this, data.id)}/>
                        </div>
                    )
                }) 
            }       
        </div>
    );
}

export default ExperienceDataTable

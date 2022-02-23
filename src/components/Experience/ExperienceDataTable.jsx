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
        "position" : "CEO",
        "id" : "0",
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "active" : false
    },
      {
        "position" : "Developer",
        "id" : "1",
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "active" : true
      },
      {
        "position" : "Thief",
        "id" : "2",
        "company" : "HiiT",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "active" : true
      }  
    ])

    const handleDelete =  id => {
        setExperienceData(experienceData.filter(data => data.id !==id))
    }

    const handleChange = index => e => {
            const value = e.target.value
        
            var newArray = [...experienceData]
            e.target.name!=="active"? newArray[index] = {...newArray[index],
                [e.target.name]:value
            }:newArray[index] = {...newArray[index],
                [e.target.name]:e.target.checked
            }
            setExperienceData(newArray)
        }
    

   const classes = useStyles()
    return (
        <div className={classes.rootContainer}>
            {
                experienceData.map((data, index) =>{
                    return( 
                        <ExperienceData key={data.id} data={data} handleDelete={handleDelete.bind(this, data.id)} handleChange={handleChange(index)}/>
                    )
                }) 
            }       
        </div>
    );
}

export default ExperienceDataTable

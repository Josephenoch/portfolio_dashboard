// imports
import {React, useState} from "react"

//Child Component imports
import PageHeader from "../PageHeader"
import ExperienceSearchBar from "./ExperienceSearchBar";
import ExperienceDataTable from "./ExperienceDataTable";
import AddExperience from "./AddExperience";

//material-ui component imports
import { makeStyles, IconButton,} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";



const useStyles = makeStyles((theme) =>({
    rootContainer:{
        // styling for the rootContainer class
        height:"88vh",
        width: "100%"
    },
    addIconDiv:{
        // styling for the addIconDiv class
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
        // styling for the addIcon class
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
    var emptyDataObj = {
        // initializing an object with empty values that serves as the defualt state for every new experience data
        position : "",
        company : "",
        startDate : "",
        endDate : "",
        present: false,
        experienceText:"",
        active : false
      }  
    
    const [createModal, setCreateModal] = useState(false) //a state variable for the create new experince modal
    const [newExperience, setNewExperience] = useState(emptyDataObj) //a state variable for all the new experience data
    const [experienceData, setExperienceData] = useState([{
        position : "CEO",
        id : 0,
        company : "TPS",
        startDate : "2022-10-20",
        endDate : "2022-10-20",
        present: true,
        experienceText:"Holla",
        active : false
    }, 
      {
        position : "Developer",
        id : 1,
        company : "Twitter",
        startDate : "2022-10-20",
        endDate : "2022-10-20",
        present: false,
        experienceText:"Hollala",
        active : true
      },
      {
        position : "Course Instructor",
        id : 2,
        company : "Edureka",
        startDate : "2022-10-20",
        endDate : "2022-10-20",
        present: false,        
        experienceText:"Hoemcml",
        active : true
      }  
    ])// dummy data for testting the app. In productionmode, api's would be used
    const [uniqueID, setUniqueID] = useState(()=>experienceData.length>0 ? experienceData[experienceData.length-1].id+1:0 ) //creating a unique ID for every experienceData 

    const handleModal = () => {
        // setting the modal boolean to its opposite whenever this operation runs
        setCreateModal(!createModal)
    }

    

    const handleSave = (e) =>{
        // this function runs for both the create and edit modals as such, the next line is used to check which it is for.
        // the handleSave for edit is called in another functio as such, it cannot have an e
        const name =  e!== undefined ? e.currentTarget.name : ""
        // this variable is used to check if any field is empty. We loop through all the fields which are objects values and check
        // if any is empty. if anyone is, then, the functions ends and the value of the found becomes true 
        // the next code block after the for only runs if found is false
      
        // this if else statement checks if the function is for create or edit
        console.log(name)
        if(name==="create"){

            // as early said, this code block only runs if found is false
            // we run the setUniqueID by incrementing its value by 1. then we add the new key of id and set its value to the new value 
            // of the uniqueID state variable
            setUniqueID(uniqueID+1)
            var newArray =newExperience
            newArray = {...newArray,
                id:uniqueID
            }
            console.log(newArray)
            // next, we set the add the data from the newExperience to the experience data only after we've validated that no field is empty
            // then we set the value of the newExperience state variable to the object with empty values we instantiated in the beginning
            setCreateModal(!createModal)
            setExperienceData([...experienceData,newArray])
            setNewExperience(emptyDataObj)
            // then we close the create modal. if the data is not validated, then the modal persists after hitting the save button

        }

        // this else is for the edit modal
        
    }

        
    
    const classes= useStyles()
    return(
        <div className={classes.rootContainer} >
            {/* the next line is a component called pageheader that shows the title of the pageb */}
            <PageHeader title="Experience"/>

            <div className = {classes.addIconDiv}>
                
                {/* The next line is the add button that can be used to add new experience*/}
                <IconButton onClick={handleModal}>
                    <AddCircle className={classes.addIcon}/> 
                </IconButton> 

                {/* The CreateExperience component that is used to add new experience it takes in the newExperience state variable as props called data,
                    it takes in the createData, createModal, handleModal and handleSave function as props with their corresponding names*/}
                <AddExperience   
                    data={newExperience} 
                    newExperience={newExperience}
                    setNewExperience={setNewExperience}
                    uniqueID={uniqueID}
                    setUniqueID={setUniqueID}
                    createModal={createModal}
                    handleModal={handleModal}
                    handleSave={handleSave}
                />

            </div>

            <div className={classes.mainSection}>

                <ExperienceSearchBar data={experienceData}/>
                
                 {/* The ExperienceDataTable component that is used to add new experience it takes in the newExperience state variable as props called data,
                    it takes in the createData, createModal, handleModal and handleSave function as props with their corresponding names*/}
                <ExperienceDataTable 
                    setExperienceData={setExperienceData}
                    experienceData={experienceData} 
                />   

            </div> 
            

        </div>
    )
}

export default Experience


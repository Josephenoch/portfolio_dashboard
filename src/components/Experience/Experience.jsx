import {React, useState} from "react"
import ExperienceHeader from "../PageHeader"
import ExperienceSearchBar from "./ExperienceSearchBar";
import ExperienceDataTable from "./ExperienceDataTable";
import { makeStyles, IconButton,} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";
import CreateExperience from "./CreateExperience";


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
        // initializing an empty object that serves as the defualt state for every new experience data
        "position" : "",
        "company" : "",
        "startDate" : "",
        "endDate" : "",
        "experienceText":"",
        "active" : false
      }  
    const [createModal, setCreateModal] = useState(false) //a state variable for the create new experince modal
     
    const [newExperience, setNewExperience] = useState(emptyDataObj) //a state variable for all the new experience data
    const [experienceData, setExperienceData] = useState([{
        "position" : "CEO",
        "id" : 0,
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "experienceText":"",
        "active" : false
    }, 
      {
        "position" : "Developer",
        "id" : 1,
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "experienceText":"",
        "active" : true
      },
      {
        "position" : "Thief",
        "id" : 2,
        "company" : "HiiT",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "experienceText":"",
        "active" : true
      }  
    ])// dummy data for testting the app. In productionmode, api's would be used
    const [uniqueID, setUniqueID] = useState(experienceData[experienceData.length-1].id+1) //creating a unique ID for every experienceData
    const handleDelete =  id => {
        // code to delete data using it's unique id
        setExperienceData(experienceData.filter(data => data.id !==id))
    }

    const handleModal = () => {
        // setting the modal boolean to its opposite whenever this operation runs
        setCreateModal(!createModal)
    }
    const handleChange = index => e => {
            // this function handles the change when the user makes an edit to an existing experience

            // collecting the input name and value in two variables, name and value
            const value = e.target.value
            const name = e.target.name

            // using the spread operator to get the values of the experienceData and put it in a list called newArray
            var newArray = [...experienceData]

            // beginning of a ternary operation that checks if the type of the input caaling this function is a radio
            // if it is, then set the value of its corresponding active state to its opposite
            // if it is not, then set the value of the corresponding input of the corresponding data item to its value 
            // this change is done to the newArray 
            name!=="active"? 
            newArray[index] = {...newArray[index],[name]:value}
            :
            newArray[index] = {...newArray[index],[name]:e.target.checked}

            // setting the value of the experienceData to the value of the newArray
            setExperienceData(newArray)
    }

    
    const createData =  e => {
        // this function handles the change when the user makes click on the add icon, that is to create a new experience

         // collecting the input name and value in two variables, name and value
        const value = e.target.value
        const name = e.target.name

         // 
        
        var newArray =newExperience
        name!=="active"?
        newArray = {...newArray,[name]:value }
        :
        newArray = {...newArray,[name]:e.target.checked}

        
        setNewExperience(newArray)
    }
    const handleSave = () =>{
        var found = false
        for (var i in Object.values(newExperience)) {
            console.log(newExperience)  
            if(Object.values(newExperience)[i] === ""){
                found = true    
                break
                
            }
        }
        if (found === false){
            setUniqueID(uniqueID+1)
            var newArray =newExperience
            newArray = {...newArray,
                id:uniqueID
            }
            setExperienceData([...experienceData,newArray])
            setNewExperience(emptyDataObj)
            setCreateModal(!createModal)
        }
        
    }
        
    
    const classes= useStyles()
    return(
        <div className={classes.rootContainer} >
            <ExperienceHeader title="Experience"/>
            <div className = {classes.addIconDiv}>
                <IconButton onClick={handleModal}>
                    <AddCircle className={classes.addIcon}/> 
                </IconButton> 
                <CreateExperience 
                    createData={createData} 
                    data={newExperience} 
                    createModal={createModal}
                    handleModal={handleModal}
                    handleSave={handleSave}
                />  
            </div>
            <div className={classes.mainSection}>
                <ExperienceSearchBar fontSize="small"/>
                <ExperienceDataTable experienceData={experienceData} handleDelete={handleDelete} handleChange={handleChange}/>   
            </div> 
            

        </div>
    )
}

export default Experience


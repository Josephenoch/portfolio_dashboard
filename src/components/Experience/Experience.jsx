import {React, useState} from "react"
import ExperienceHeader from "../PageHeader"
import ExperienceSearchBar from "./ExperienceSearchBar";
import ExperienceDataTable from "./ExperienceDataTable";
import { makeStyles, IconButton,} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";
import CreateExperience from "./CreateExperience";


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
    var emptyDataObj = {
        "position" : "",
        "company" : "",
        "startDate" : "",
        "endDate" : "",
        "experienceText":"",
        "active" : false
      }  
    const [createModal, setCreateModal] = useState(false) 
    const [uniqueID, setUniqueID] = useState(2) 
    const [newExperience, setNewExperience] = useState(emptyDataObj)
    const [experienceData, setExperienceData] = useState([{
        "position" : "CEO",
        "id" : "0",
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "experienceText":"",
        "active" : false
    },
      {
        "position" : "Developer",
        "id" : "1",
        "company" : "TPS",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "experienceText":"",
        "active" : true
      },
      {
        "position" : "Thief",
        "id" : "2",
        "company" : "HiiT",
        "startDate" : "2022-10-20",
        "endDate" : "2022-10-20",
        "experienceText":"",
        "active" : true
      }  
    ])

    const handleDelete =  id => {
        setExperienceData(experienceData.filter(data => data.id !==id))
    }

    const handleModal = () => {
        setCreateModal(!createModal)
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

    
    const createData =  e => {
        const value = e.target.value
        setUniqueID(uniqueID+1)
        var newArray =newExperience
        e.target.name!=="active"? newArray = {...newArray,
            [e.target.name]:value
        }:newArray = {...newArray,
            [e.target.name]:e.target.checked
        }

        
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
            var newArray =newExperience
            newArray = {...newArray,
                id:uniqueID
            }
            setExperienceData([...experienceData,newExperience])
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


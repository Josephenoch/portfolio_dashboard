import {React,useState} from 'react';
import PageHeader from '../PageHeader';
import EducationDataTable from './EducationDataTable';
import EducationSearchBar from './EducationSearchBar';
import { makeStyles, IconButton,} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons/";
import {AddEducation} from './AddEducation';

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
    const emptyObj =  {
        instName:"",
        cOStudy:"",
        degree:"",
        grade:"",
        startDate : "",
        endDate: "",
        educationText:"",
        active:false
    }
    const [educationData, setEducationData] = useState([
        {
            id:0,
            instName:"MIT",
            cOStudy:"Computer Science",
            degree:"BSc.",
            grade:"1st Class",
            startDate : "2022-10-20",
            endDate: "2022-10-20",
            educationText:"",
            active:false
        },
        {
            id:1,
            instName:"Harvard",
            cOStudy:"Computer Science",
            degree:"MSc.",
            grade:"1st Class",
            startDate : "2022-10-20",
            endDate: "2022-10-20",
            educationText:"",
            active:false
        },
        
    ])
    const [newEducation, setNewEducation] = useState(emptyObj)
    const [uniqueId, setUniqueID] = useState(()=> educationData.length>0 ? educationData[educationData.length-1].id + 1 : 0  )
    const [createModal, setCreateModal] = useState(false)
    

    const handleCreateModal = () =>{
        setCreateModal(!createModal)
    }

    const handleCreateChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        const checked = e.target.checked

        var newObject = {...newEducation}

        name !== "active"
        ?
        newObject = {...newObject, [name]:value}
        :
        newObject = {...newObject, [name]:checked}

        setNewEducation(newObject)
    }

    

    const handleCreateSave = () =>{
        var newObject = newEducation

        newObject = {...newObject, "id":uniqueId}
        setUniqueID(uniqueId+1)
        setEducationData([...educationData, newObject])
        setNewEducation(emptyObj)
        setCreateModal(!createModal)
    }
    const classes = useStyles()
    return (
        <div className={classes.rootContainer} >
            <PageHeader title="Education"/>
            <div className = {classes.addIconDiv}>
                <IconButton onClick={handleCreateModal}>
                    <AddCircle className={classes.addIcon}/>  
                </IconButton>   

                <AddEducation
                    newEducation = {newEducation}
                    modal = {createModal}
                    handleModal = {handleCreateModal}
                    handleSave = {handleCreateSave}
                    handleChange = {handleCreateChange}
                />
            </div>
            <div className={classes.mainSection}>
                <EducationSearchBar
                    data={educationData}
                />
                <EducationDataTable
                    educationData={educationData}
                    setEducationData={setEducationData}
                />
            </div> 
            

        </div>
    );
}
export default Education
import {React, useState, useEffect} from 'react'
import { Box, Grid, Typography, makeStyles, IconButton,  Collapse, Chip, Avatar} from '@material-ui/core'
import {Event, MoreHoriz, Delete, Edit, Publish, Cancel} from "@material-ui/icons";
import EditExperience from "./EditExperience";

const useStyles = makeStyles((theme) => ({
    dataContainer:{
        whiteSpace: 'nowrap',
        display:"flex",
        alignItems:"center",
        height: "10vh",
        width: "100%",
        backgroundColor: 'white',
        marginTop:"20px",
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            boxShadow: "0 5px 10px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.12)",
        },
    },
    avatarContainer:{
        marginLeft:"20px",
        width:"5%",
        [theme.breakpoints.down("md")]:{
            width:"10%",
            marginLeft:"10px",
        }  
    },
    roleText:{
        display:"inline-block",
        width:"15%",
        marginRight:"50px",
        fontWeight:"bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.down("md")]:{
            marginRight:"0px",
            marginLeft:"35px",
        }    
      
    },
    date:{
        display:"flex",
        alignItems:"center",
        width: "25%",
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    },
    companyBox:{
        width:"10%",
        marginLeft:"50px",
        display:"flex",
        overflow:"hidden",
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            paddingRight:"40px",
            marginLeft:"60px",
        }
    },
    statusContainer:{
        marginLeft:100,
        display:"flex",
        alignItems:"center",
        borderRadius:20,
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    },
    optionsBox:{
        display:"flex",
        position:"absolute",
        right:"3%",
    },
    icon:{
        [theme.breakpoints.down("md")]:{
            fontSize:10
        }
    }
    
}))

const ExperienceData = (props) => {
    const emptyDataObj = {
        position : "",
        company : "",
        startDate : "",
        endDate : "",
        present: false,
        experienceText:"",
        active : false
    }
    const [editExperience, setEditExperience] = useState(emptyDataObj) // this is a state variable that stores the concurrent value of an edit
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [options, setOptions] = useState(false)
    const [modal, setModal] = useState(false);

    const classes = useStyles()

    const handleOptions = () => {
        setOptions(!options)    
    };
    const handleModal = (data) => {
        if(!modal){
            setEditExperience(data)
        }  
        setModal(!modal)
    };

    const handleChange = e =>{
        // this function handles the change when the user makes an edit to an existing experience

        // collecting the input name and value in two variables, name and value
        const value = e.target.value
        const name = e.target.name

        // using the spread operator to get the values of the experienceData and put it in a list called newArray
        var newArray = editExperience

        // beginning of a ternary operation that checks if the type of the input caaling this function is a radio
        // if it is, then set the value of its corresponding active state to its opposite
        // if it is not, then set the value of the corresponding input of the corresponding data item to its value 
        // this change is done to the newArray 
        name!="active" && name!="present"? 
        newArray = {...newArray,[name]:value}
        :
        name ==="active" || (name==="present" && newArray.present)
        ? newArray = {...newArray,[name]:e.target.checked}
        :
        newArray = {...newArray,[name]:e.target.checked,["endDate"]:""}

        console.log(newArray)        

        // setting the value of the experienceData to the value of the newArray
        setEditExperience(newArray)
    }
    const handleSave = () =>{
            var editArray =editExperience
            
            // everything up untill here is the same as the create 
            // however, from here, we find the exact list item we edited, and replace it with its updated version
            // we do this using a variable called data which we get from the experience data
            var data = [...props.experienceData]
            console.log(data)
            for( var i in data){
                if (data[i].id ===editArray.id){
                    data[i] = editArray
                }
            }
            // we lastly set the validated and updated data to the experienceData array
            props.setExperienceData(data)
            // lastly we set the editExperience state variable to the object with empty values we instantiated in the beginning 
            setModal(!modal)
    }
 

    useEffect(()=>{
        var found = false
        for (var i in Object.values(editExperience)) {
            if(editExperience.present===true && Object.keys(editExperience)[i]==="endDate"){
                continue
            }
            else if(Object.values(editExperience)[i] === ""){
                setBtnDisabled(true)
                found = true    
                break
                
            }
        }
        if (found === false){
            setBtnDisabled(false)
        }
    }, [editExperience])
    return (
        <Box className={classes.dataContainer} boxShadow={1}>
            <Grid container className={classes.avatarContainer}>
                <Grid item>
                    <Avatar>{ props.data.position[0]}</Avatar>
                </Grid >
            </Grid> 
            <Typography variant="body1" className={classes.roleText}>
                {props.data.position}
            </Typography>
            <Box className={classes.date}>
                <Event fontSize="small" />
                <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                    { props.data.present ? props.data.startDate + " - " +"Present" : props.data.startDate + " - " +props.data.endDate}
                </Typography>
            </Box>
            <Box className={ classes.companyBox}>
                <Typography style={{margin:"0px 0px 2px 5px"}} variant="body1">
                    {props.data.company}
                </Typography>
            </Box>
            <Box className={classes.statusContainer}>
                <Chip label={props.data.active ? "active" : "inactive" } color={props.data.active ? "primary": "secondary"} />    
            </Box>
            <Box className={classes.optionsBox}>
                <Collapse in={options} timeout="auto" >
                    <IconButton onClick={props.handleDelete}>
                        <Delete fontSize="small" className={classes.icon}/>
                    </IconButton>
                    <IconButton onClick={handleModal.bind(this, props.data)}>
                        <Edit fontSize="small" className={classes.icon}/>
                    </IconButton>
                    {props.data.active ? "": <IconButton>
                        <Publish fontSize="small" className={classes.icon}/>
                    </IconButton>}
                </Collapse>
                <IconButton onClick={handleOptions}>
                    {options ? <Cancel fontSize="small" className={classes.icon}/> : <MoreHoriz fontSize="small" className={classes.icon}/> }
                </IconButton>
            </Box>
            <EditExperience  
                handleModal={handleModal} 
                handleSave={handleSave}
                modal={modal} 
                handleChange={handleChange} 
                editExperience={editExperience}
                btnDisabled={btnDisabled}
            />
        </Box>

  )
}
export default ExperienceData
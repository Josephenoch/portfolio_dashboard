import {React, useState, useEffect} from 'react'
import { Box, Grid, Typography, makeStyles, IconButton,  Collapse, Chip, Avatar, Modal, Button, Backdrop, useTheme} from '@material-ui/core'
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
            marginLeft:"30px",
        }
    },
    statusContainer:{
        marginLeft:100,
        display:"flex",
        alignItems:"center",
        borderRadius:20,
        [theme.breakpoints.down("sm")]:{
            display:"none",
            
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
    },
    modal:{
        position: 'absolute',
        top: "50%",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "25vw",
        height:"25vh",
        backgroundColor: 'white',
        border: '1px solid #777',
        boxShadow: 24,
        borderRadius:20,
        display:"flex",
        [theme.breakpoints.down("md")]:{
            width: "70vw",
            height:"20vh",
        }
    }
}))

const ExperienceData = (props) => {
    const theme = useTheme()
    const [editExperience, setEditExperience] = useState({}) // this is a state variable that stores the concurrent value of an edit
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [options, setOptions] = useState(false)
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false)

    const classes = useStyles()

    const handleOptions = () => {
        setOptions(!options)    
    };
    const handleModal = () => {
        if(!modal){
            setEditExperience(props.data)
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
        name!=="active" && name!=="present"? 
        newArray = {...newArray,[name]:value}
        :
        name ==="active" || (name==="present" && newArray.present)
        ? newArray = {...newArray,[name]:e.target.checked}
        :
        newArray = {...newArray,[name]:e.target.checked,"endDate":""}
        

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
    const handleDelete = () => {
        // code to delete data using it's unique id
    props.setExperienceData(props.experienceData.filter(data => data.id !==props.data.id))
    // setDeleteModal(!deleteModal)
      
    }
    const handleUpload = () => {
        var newArray = [...props.experienceData]
        const data = props.data

        data.active =!data.active
        
        for(let i in newArray){
            if(newArray[i]===data.id){
                newArray[i].active = data
            }
        }
        props.setExperienceData(newArray)
    }

    useEffect(()=>{
        var found = false
        for (let i in Object.values(editExperience)) {
            if(editExperience.present && Object.keys(editExperience)[i]==="endDate"){
                continue
            }
            else if(Object.values(editExperience)[i] === ""){
                setBtnDisabled(true)
                found = true    
                break
                
            }
        }
        if (!found){
            setBtnDisabled(false)
        }
    }, [editExperience])
    return (
        <Box className={classes.dataContainer} boxShadow={1}>
            <Grid container className={classes.avatarContainer}>
                <Grid item>
                    <Avatar
                        style={{
                            backgroundColor: props.data.active ? theme.palette.primary.main : theme.palette.secondary.main
                        }}
                    >{ props.data.position[0].toUpperCase()}</Avatar>
                </Grid >
            </Grid> 
            <Typography variant="body1" className={classes.roleText}>
                {props.data.position}
            </Typography>
            <Box className={classes.date}>
                <Event fontSize="small" />
                <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                    { props.data.present ? `${props.data.startDate} - present` : `${props.data.startDate} - ${props.data.endDate}`}
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
                <Collapse 
                    in={options} 
                    onClose={handleOptions}
                    timeout="auto"
                    variant="temporary"
                >
                    <IconButton onClick={() => setDeleteModal(!deleteModal)}>
                        <Delete fontSize="small" className={classes.icon}/>
                    </IconButton>
                    <IconButton onClick={handleModal}>
                        <Edit fontSize="small" className={classes.icon}/>
                    </IconButton>
                    {props.data.active ? "": <IconButton onClick={handleUpload}>
                        <Publish fontSize="small" className={classes.icon}/>
                    </IconButton>}
                </Collapse>
                <IconButton onClick={handleOptions}>
                    {options ? <Cancel fontSize="small" className={classes.icon}/> : <MoreHoriz fontSize="small" className={classes.icon}/> }
                </IconButton>
            </Box>
            <Box>
                
                <Modal
                    open={deleteModal}// this sets the modal to open when the data in the parent component is true
                    onClose={() => setDeleteModal(!deleteModal)} // this runs the handleModal function in the parent component when the modal is closed
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 1000,
                    }}
                >
                    <Box className={classes.modal}>
                        
                        <Typography
                            variant="body1"
                            style={{
                                marginBottom:"50px",
                                position:"absolute",
                                top:20,
                                left:30
                            }}
                        >
                            Confirm delete?
                        </Typography>
                        <Box 
                            style={{
                                margin:"auto",
                                marginTop:"100px"
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                name="Delete"
                                onClick={handleDelete}
                                style={{
                                    marginRight:"20px"
                                }}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                name="Cancel"
                                onClick={()=>{setDeleteModal(!deleteModal)}}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Modal>
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
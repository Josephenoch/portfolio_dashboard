import {React, useEffect, useState} from 'react'

import {makeStyles, Box, Typography, Grid, Avatar, Chip, IconButton, Collapse, Button, Modal, Backdrop, useTheme, Paper} from "@material-ui/core";
import {Event, MoreHoriz, Delete, Edit, Publish, Cancel} from "@material-ui/icons";
import {EditEducation} from './EditEducation';


const useStyles = makeStyles((theme) => ({
    buttonStyle:{
        marginTop:"20px",
        left:"90%",
        [theme.breakpoints.down("sm")]: {
            left:"80%"
        }
    },
    dataContainer:{
        whiteSpace: 'nowrap',
        display:"flex",
        alignItems:"center",
        height: "10vh",
        width: "100%",
        backgroundColor: theme.palette,
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
    schoolName:{
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
    degreeBox:{
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
    },
    modal:{
        position: 'absolute',
        top: "50%",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "25vw",
        height:"25vh",
        border: '1px solid #777',
        boxShadow: 24,
        borderRadius:20,
        display:"flex",
        [theme.breakpoints.down("md")]:{
            width: "70vw",
            height:"20vh",
        }
    },
}))

const EducationData= (props) => {
    const theme = useTheme()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [modal, setModal] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [editEducation, setEditEducation] = useState({})
    const [deleteModal, setDeleteModal] = useState(false)
    const handleModal = () => {
        if(!modal){
            setEditEducation(props.data)
        }
        setModal(!modal)
    }
    const handleClick = () => {setOpenOptions(!openOptions)};

    const handleChange = (e) => {
        const name = e.target.name

        var newArray =editEducation

        name !== "active"
        ?
        newArray = {...newArray,[name]:e.target.value}
        :
        newArray = {...newArray,[name]:e.target.checked}

        setEditEducation(newArray)
    }

    const handleSave = () =>{
        const editArray = editEducation
        const newArray = [...props.educationData]

        for(let i in newArray){
            if(newArray[i].id === editArray.id){
                newArray[i]=editArray
            }
        }

        props.setEducationData(newArray)
        setModal(!modal)

    }

    const handleDelete = () =>{
        props.setEducationData(
            props.educationData.filter(educationData =>
                props.data.id!== educationData.id
            )
        )
        setDeleteModal(!deleteModal)
    }
    useEffect(()=>{
        var found = false
        for(var i in Object.values(editEducation)){
            if(Object.values(editEducation)[i]===""){
                setBtnDisabled(true)
                found = true
                break
            }
        }
        if(!found){
            setBtnDisabled(false)
        }
    }, [editEducation])

    const handleUpload = () =>{
        const newArray = [...props.educationData]
        const newObject = props.data
        
        newObject.active = !newObject.active
        for(let i in newArray){
            if(newArray[i].id===newObject.id){
                newArray[i] = newObject
            }
        }

        props.setEducationData(newArray)
    }
    const classes = useStyles()
    return (
        <Paper className={classes.dataContainer} boxshadow={1}>
            <Grid container className={classes.avatarContainer}>
                <Grid item>
                    <Avatar
                        style={{
                            backgroundColor: props.data.active ? theme.palette.primary.main : theme.palette.secondary.main
                        }}
                    >{props.data.instName[0].toUpperCase()}</Avatar>
                </Grid >
            </Grid> 
            <Typography variant="body1" className={classes.schoolName}>
                {props.data.instName}
            </Typography>
            <Box className={classes.date}>
                <Event fontSize="small" />
                <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                    {props.data.startDate+ " - "+props.data.endDate}
                </Typography>
            </Box>
            <Box className={classes.degreeBox}>
                <Typography style={{margin:"0px 0px 2px 5px"}} variant="body1">
                    {props.data.degree}
                </Typography>
            </Box>
            <Box className={classes.statusContainer}>
                <Chip label={props.data.active ? "active" : "inactive" } color={props.data.active ? "primary": "secondary"} />    
            </Box>
            <Box className={classes.optionsBox}>
                <Collapse in={openOptions} timeout="auto" >
                    <IconButton onClick={() => setDeleteModal(!deleteModal)}>
                        <Delete fontSize="small" className={classes.icon}   />
                    </IconButton>
                    <IconButton onClick={handleModal}>
                        <Edit fontSize="small" className={classes.icon} />
                    </IconButton >
                    {props.data.active ? "": <IconButton onClick={handleUpload}>
                        <Publish fontSize="small" className={classes.icon}  />
                    </IconButton>}
                </Collapse>
                <IconButton onClick={handleClick}>
                    {openOptions ? <Cancel fontSize="small" className={classes.icon}    /> : <MoreHoriz fontSize="small" className={classes.icon}   /> }
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
                    <Paper className={classes.modal}>
                        
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
                    </Paper>
                </Modal>
            </Box>
            <EditEducation
                data={props.data}
                modal={modal}
                handleModal={handleModal}
                editEducation={editEducation}
                handleChange={handleChange}
                btnDisabled={btnDisabled}
                handleSave={handleSave}
            />
        </Paper>        
    )
}
export default EducationData
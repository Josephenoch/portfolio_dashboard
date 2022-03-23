import {React, useState} from 'react';
import { Box, IconButton, TextField, makeStyles,Switch, Button, Modal, Backdrop, FormControlLabel, Paper} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) =>({
  modal:{
    position: 'absolute',
    top: "50%",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height:"80vh",
    overflowY:"auto",
    borderRadius:20,
    backgroundColor: theme.palette,
    border: '1px solid #777',
    boxShadow: 24,
    padding: "20px 40px 60px",
    [theme.breakpoints.down("sm")]:{
        width: "90vw",
        height:"70vh",
        padding: "20px 10px 30px",
    }
},
inputContainer:{
    marginBottom:"20px",
    display:"flex",
    justifyContent:"space-between"
},
buttonStyle:{
    top:"17%",
    left:"80%",
    backgroundColor:theme.palette.primary.main,
    color:"white",
    borderColor:"white",
    [theme.breakpoints.down("sm")]: {
        left:"48%"
    }
},
}))

const AddExperience = (props)=> {
  const classes = useStyles()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const createData =  e => {
    // this function handles the change when the user makes click on the add icon, that is to create a new experience

    // collecting the input name and value in two variables, name and value
    const value = e.target.value
    const name = e.target.name

    // this next line collects the newExperience into an array called newArray using ES6 spread function
    
    var newArray ={...props.newExperience}

    // this line checks if the target input is a radio button or anyother type and then changes its value
    // to  the corresponding value of the users input 
    name!=="active" && name!=="present"
    ?
    newArray = {...newArray,[name]:value }
    :
    name==="active" || (name==="present" && newArray.present)
    ?
    newArray = {...newArray,[name]:e.target.checked}
    :
    newArray ={...newArray,[name]:e.target.checked, "endDate":""}

    // this next line sets the newArray to the state variable new experience so as to validate that no field is empty
    // before adding it to the experience data
    props.setNewExperience(newArray)
    
    
    
}

    useEffect(() => {
        var found = false
        for (var i in Object.values(props.newExperience)) {
            if(props.newExperience.present && Object.keys(props.newExperience)[i]==="endDate"){
                continue
            }
            else if(Object.values(props.newExperience)[i] === ""){
                setBtnDisabled(true)
                found = true    
                break
                
            }
        }
        if (!found){

            // as early said, this code block only runs if found is false
            // we run the setUniqueID by incrementing its value by 1. then we add the new key of id and set its value to the new value 
            // of the uniqueID state variable
        
            setBtnDisabled(false)
        }
    },[props.newExperience])

    return (
        <Modal
                open={props.createModal}
                onClose={props.handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
            <Paper className={classes.modal}>
                <IconButton 
                    onClick={props.handleModal}
                    style={{
                        marginLeft:"90%",
                        marginBottom:"20px"
                    }}
                    >
                    <Cancel fontSize="small"/>
                </IconButton>
                <Box className={classes.inputContainer}>
                    <TextField 
                        placeholder="Position" 
                        variant="filled" 
                        onChange={createData}
                        value={props.data.position} 
                        name="position"/>
                    <TextField 
                        placeholder="Company" 
                        variant="filled" 
                        onChange={createData}
                        value={props.data.company} 
                        name="company"/>
                </Box>
                <Box className={classes.inputContainer}>
                    <TextField 
                        type="date" 
                        label="Start Date" 
                        onChange={createData}
                        value={props.data.startDate} 
                        name="startDate"
                        InputLabelProps={{shrink: true,}} />
                    <TextField 
                        type="date" 
                        label="End Date"
                        onChange={createData}
                        disabled={props.data.present}
                        value={props.data.endDate}
                        name="endDate"
                        InputLabelProps={{shrink: true,}} />
                </Box>
                <FormControlLabel 
                    style={{marginTop:"30px"}}
                    control={
                        <Switch  
                            color="primary" 
                            onChange={createData} //onchange, a general function for handling input change is run
                            checked={props.data.present}  // the name is the same as the object name in the parent data
                            name="present"  // the name is the same as the object name in the parent data
                        />
                    } 
                label="Present" />
               
                <TextField
                     style={{
                        marginTop:"30px",
                        width:"100%",  
                    }}
                    id="outlined-basic"
                    value={props.data.experienceText} 
                    variant="outlined"
                    onChange={createData}
                    name= "experienceText"
                    multiline={true}
                />
                 <FormControlLabel 
                  style={{marginTop:"30px"}}
                    control={
                        <Switch  
                            color="primary" 
                            onChange={createData}
                            checked={props.data.active} 
                            name="active"
                        />
                    } 
                label="Active" />
                <Button
                    variant="outlined"
                    name="create"
                    className={classes.buttonStyle}
                    onClick={props.handleSave}
                    disabled={btnDisabled}
                >
                    {/* {console.log(props.createBtnDisabled)} */}
                    Save
                </Button>
            </Paper>
        </Modal>
    );
}
export default AddExperience
import {React, useState} from 'react';
import { Box, IconButton, TextField, makeStyles,Switch, Button, Modal, Backdrop, FormControlLabel} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
  modal:{
    position: 'absolute',
    top: "50%",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height:"70vh",
    overflowY:"scroll",
    backgroundColor: 'white',
    border: '1px solid #777',
    boxShadow: 24,
    padding: "20px 40px 60px",
    [theme.breakpoints.down("sm")]:{
        width: "90vw",
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
    left:"92%",
    backgroundColor:"rgb(47,199,245)",
    color:"white",
    borderColor:"white",
    [theme.breakpoints.down("sm")]: {
        left:"80%"
    }
},
}))

const CreateExperience = (props)=> {
  const classes = useStyles()
  const createData =  e => {
    // this function handles the change when the user makes click on the add icon, that is to create a new experience

    // collecting the input name and value in two variables, name and value
    const value = e.target.value
    const name = e.target.name

    // this next line collects the newExperience into an array called newArray using ES6 spread function
    
    var newArray ={...props.newExperience}
    console.table(newArray )

    // this line checks if the target input is a radio button or anyother type and then changes its value
    // to  the corresponding value of the users input 
    name!=="active"?
    newArray = {...newArray,[name]:value }
    :
    newArray = {...newArray,[name]:e.target.checked}

    // this next line sets the newArray to the state variable new experience so as to validate that no field is empty
    // before adding it to the experience data
    props.setNewExperience(newArray)
    
    var found 
    for (var i in Object.values(props.newExperience)) {
        if(Object.values(props.newExperience)[i] === ""){
            found = true    
            break
            
        }
    }
    if (found === false){

        // as early said, this code block only runs if found is false
        // we run the setUniqueID by incrementing its value by 1. then we add the new key of id and set its value to the new value 
        // of the uniqueID state variable
        props.setUniqueID(props.uniqueID+1)
        var newArray =props.newExperience
        newArray = {...newArray,
            id:props.uniqueID
        }
        props.setCreateBtnDisabled(false)
    }
    
}
  return (<div>
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
        <Box className={classes.modal}>
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
                    value={props.data.endDate}
                    name="endDate"
                    InputLabelProps={{shrink: true,}} />
            </Box>
            <FormControlLabel 
                control={
                    <Switch  
                        color="primary" 
                        onChange={createData}
                        checked={props.data.active} 
                        name="active"
                    />
                } 
            label="Active" />
            <TextField
                style={{
                    width:"100%",
                    
                }}
                id="outlined-basic"
                value={props.data.experienceText} 
                variant="outlined"
                onChange={createData}
                name= "experienceText"
                multiline={true}
            />
             
                <Button
                    variant="outlined"
                    name="create"
                    className={classes.buttonStyle}
                    onClick={props.handleSave}
                    disabled={props.createBtnDisabled}
                >
                    Save
                </Button>
            </Box>
        </Modal>
  </div>);
}
export default CreateExperience
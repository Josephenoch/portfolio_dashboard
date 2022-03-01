// imports
import {React} from 'react';

//material-ui imports
import { Box, IconButton, TextField, makeStyles,Switch, Button, Modal, Backdrop, FormControlLabel} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
  modal:{
    position: 'absolute',
    top: "50%",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height:"80vh",
    overflowY:"scroll",
    backgroundColor: 'white',
    borderRadius:20,
    border: '1px solid #777',
    boxShadow: 24,
    padding: "20px 40px 60px",
    [theme.breakpoints.down("sm")]:{
        width: "90vw",
        padding: "20px 10px 30px",
    }
    // styling for the edit experience modal
},
inputContainer:{
    marginBottom:"20px",
    display:"flex",
    justifyContent:"space-between"
    // styling for the input container class
},
buttonStyle:{
    top:"17%",
    left:"80%",
    backgroundColor:"rgb(47,199,245)",
    color:"white",
    borderColor:"white",
    [theme.breakpoints.down("sm")]: {
        left:"48%"
    }
    // styling for the button
},
}))

const EditExperience = (props)=> {
  const classes = useStyles()
  
  //   assigning  the useStyles(the jss styles) to the classes variable
  return (
      
       <Modal
            open={props.modal}// this sets the modal to open when the data in the parent component is true
            onClose={props.handleModal} // this runs the handleModal function in the parent component when the modal is closed
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 1000,
            }}
            >
        
            <Box className={classes.modal}>
                <IconButton 
                    onClick={props.handleModal}// this runs the handleModal function in the parent component when the cancle button is clicked
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
                        onChange={props.handleChange} //onchange, a general function for handling input change is run
                        value={props.editExperience.position} // the name is the same as the object name in the parent data
                        name="position"  // the name is the same as the object name in the parent data
                    />
                    <TextField 
                        placeholder="Company" 
                        variant="filled" 
                        onChange={props.handleChange} //onchange, a general function for handling input change is run
                        value={props.editExperience.company}  // the name is the same as the object name in the parent data
                        name="company" // the name is the same as the object name in the parent data
                    />
                </Box>
                <Box className={classes.inputContainer}>
                    <TextField 
                        type="date" 
                        label="Start Date" 
                        onChange={props.handleChange}//onchange, a general function for handling input change is run
                        value={props.editExperience.startDate}  // the name is the same as the object name in the parent data
                        name="startDate"  // the name is the same as the object name in the parent data
                        InputLabelProps={{shrink: true,}} 
                        />
                    <TextField 
                        type="date" 
                        label="End Date"
                        onChange={props.handleChange}//onchange, a general function for handling input change is run
                        disabled={props.editExperience.present}
                        value={props.editExperience.endDate} // the name is the same as the object name in the parent data
                        name="endDate"  // the name is the same as the object name in the parent data
                        InputLabelProps={{shrink: true,}}
                    />
                </Box>
                
                <FormControlLabel 
                    style={{marginTop:"30px"}}
                    control={
                        <Switch  
                            color="primary" 
                            onChange={props.handleChange} //onchange, a general function for handling input change is run
                            checked={props.editExperience.present}  // the name is the same as the object name in the parent data
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
                    value={props.editExperience.experienceText}  // the name is the same as the object name in the parent data
                    variant="outlined"
                    onChange={props.handleChange}//onchange, a general function for handling input change is run
                    name= "experienceText"  // the name is the same as the object name in the parent data
                    multiline={true}
                />
                <FormControlLabel 
                    style={{marginTop:"30px"}}
                    control={
                        <Switch  
                            color="primary" 
                            onChange={props.handleChange} //onchange, a general function for handling input change is run
                            checked={props.editExperience.active}  // the name is the same as the object name in the parent data
                            name="active"  // the name is the same as the object name in the parent data
                        />
                    } 
                label="Active" />
                <Button
                    variant="outlined"
                    className={classes.buttonStyle}
                    name="save"
                    disabled={props.btnDisabled}
                    onClick={props.handleSave}
                >
                    Save
                </Button>
            </Box>
        </Modal>
  );
}
export default EditExperience
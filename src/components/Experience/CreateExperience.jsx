import {React} from 'react';
import { Box, IconButton, TextField, makeStyles,Switch, Button, Modal, Backdrop, FormControlLabel} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
  modal:{
    position: 'absolute',
    top: "50%",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height:"60vh",
    overflowY:"scroll",
    backgroundColor: 'white',
    border: '1px solid #777',
    boxShadow: 24,
    padding: "20px 40px 60px",
    [theme.breakpoints.down("sm")]:{
        width: "100vw",
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
                    marginLeft:"95%",
                    marginBottom:"20px"
                }}
                >
                <Cancel fontSize="small"/>
            </IconButton>
            <Box className={classes.inputContainer}>
                <TextField 
                    placeholder="Position" 
                    variant="filled" 
                    onChange={props.createData}
                    value={props.data.position} 
                    name="position"/>
                <TextField 
                    placeholder="Company" 
                    variant="filled" 
                    onChange={props.createData}
                    value={props.data.company} 
                    name="company"/>
            </Box>
            <Box className={classes.inputContainer}>
                <TextField 
                    type="date" 
                    label="Start Date" 
                    onChange={props.createData}
                    value={props.data.startDate} 
                    name="startDate"
                    InputLabelProps={{shrink: true,}} />
                <TextField 
                    type="date" 
                    label="End Date"
                    onChange={props.createData}
                    value={props.data.endDate}
                    name="endDate"
                    InputLabelProps={{shrink: true,}} />
            </Box>
            <FormControlLabel 
                control={
                    <Switch  
                        color="primary" 
                        onChange={props.createData}
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
                onChange={props.createData}
                name= "experienceText"
                multiline={true}
            />
             
                <Button
                    variant="outlined"
                    className={classes.buttonStyle}
                    onClick={props.handleSave}
                >
                    Save
                </Button>
            </Box>
        </Modal>
  </div>);
}
export default CreateExperience
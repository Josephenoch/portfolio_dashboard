import {React} from 'react';
import { Box, IconButton, TextField, makeStyles, Typography, Button, Modal, Backdrop} from '@material-ui/core';
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

const EditExperience = (props)=> {
  const classes = useStyles()
  return (<div>
       <Modal
            open={props.modal}
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
                <TextField placeholder="Position" variant="filled" value={props.data.roleName} />
                <TextField placeholder="Company" variant="filled" value={props.data.company} />
            </Box>
            <Box className={classes.inputContainer}>
                <TextField 
                    type="date" 
                    label="Start Date" 
                    value={props.data.startDate} 
                    InputLabelProps={{shrink: true,}} />
                <TextField 
                    type="date" 
                    label="End Date"
                    value={props.data.endDate}
                    InputLabelProps={{shrink: true,}} />
            </Box>
            <TextField
                style={{
                    width:"100%",
                    
                }}
                id="outlined-basic"
                value={props.data.experienceText} 
                variant="outlined"
                multiline={true}
            />
            
                <Typography id="modal-modal-description" style={{ mt: 2 }}>
                </Typography>
                <Button
                    variant="outlined"
                    className={classes.buttonStyle}
                    onClick={props.handleModal}
                >
                    Save
                </Button>
            </Box>
        </Modal>
  </div>);
}
export default EditExperience
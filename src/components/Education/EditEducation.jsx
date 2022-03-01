import React from 'react'
import {makeStyles, Modal, TextField, Backdrop, Button, Box, Typography,IconButton, FormControlLabel, Switch} from "@material-ui/core";
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    modal:{
        position: 'fixed',
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
        top:"10%",
        left:"92%",
        backgroundColor:"rgb(47,199,245)",
        color:"white",
        borderColor:"white",
        [theme.breakpoints.down("sm")]: {
            left:"80%"
        }
    }
}))
const EditEducation = (props) => {
    const classes = useStyles()
    return (
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
                <TextField placeholder="Institution's Name" variant="filled" />
                <TextField placeholder="Course of Study"  variant="filled" />
            </Box>
            <Box className={classes.inputContainer}>
                <TextField placeholder="Degree Eg. Bachelor" variant="filled" />
                <TextField placeholder="Grade"  variant="filled" />
            </Box>
            <Box className={classes.inputContainer}>
                <TextField 
                    type="date" 
                    label="Start Date" 
                    InputLabelProps={{shrink: true,}} />
                <TextField 
                    
                    type="date" 
                    label="End Date" 
                    InputLabelProps={{shrink: true,}} />
            </Box>
            <FormControlLabel 
                control={
                    <Switch  
                        color="primary" 
                        checked={props.data.active}  // the name is the same as the object name in the parent data
                        name="active"  // the name is the same as the object name in the parent data
                    />
                } 
                label="Active" />
            <TextField
                style={{
                    width:"100%",
                    
                }}
                id="outlined-basic"
                value={props.data.educationText} 
                variant="outlined"
                multiline={true}
            />
            
                <Typography id="modal-modal-description" style={{ mt: 2 }}>
                </Typography>
                <Button
                    variant="outlined"
                    className={classes.buttonStyle}
                    onClick={props.handleClose}
                >
                    Save
                </Button>
            </Box>
        </Modal>
    )
}
export default EditEducation
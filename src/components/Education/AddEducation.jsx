import {React, useState, useEffect} from 'react'

import {makeStyles, Modal, TextField, Backdrop, Button, Box, IconButton, FormControlLabel, Switch, Paper} from "@material-ui/core";
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
        backgroundColor: theme.palette,
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
        backgroundColor:theme.palette.primary.main,
        color:"white",
        borderColor:"white",
        [theme.breakpoints.down("sm")]: {
            left:"80%"
        }
    }
}))
export const AddEducation = (props) => {
    const classes = useStyles()
    const [btnDisabled, setBtnDisabled] = useState(true)
    useEffect(() => {
        var found = false
        console.log(props.newEducation)
        for(let i in Object.values(props.newEducation)){
            if(Object.values(props.newEducation)[i]===""){
                found = true
                setBtnDisabled(true)
                break
            }
        }
        if(!found){
            setBtnDisabled(false)
        }
    }, [props.newEducation])
    
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

        <Paper className={classes.modal}>
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
                    placeholder="Institution's Name" 
                    variant="filled" 
                    name="instName"
                    onChange={props.handleChange}
                    value={props.newEducation.instName} 
                />
                <TextField 
                    placeholder="Course of Study"  
                    variant="filled" 
                    name="cOStudy"
                    onChange={props.handleChange}
                    value={props.newEducation.cOStudy} 
                />
            </Box>
            <Box className={classes.inputContainer}>
                <TextField 
                    placeholder="Degree Eg. Bachelor" 
                    variant="filled" 
                    name="degree"
                    onChange={props.handleChange}
                    value={props.newEducation.degree}     
                />
                <TextField 
                    placeholder="Grade"  
                    variant="filled" 
                    name="grade"
                    onChange={props.handleChange}
                    value={props.newEducation.grade} 
                />
            </Box>
            <Box className={classes.inputContainer}>
                <TextField 
                    type="date" 
                    label="Start Date" 
                    InputLabelProps={{shrink: true,}}
                    name="startDate"
                    onChange={props.handleChange}
                    value={props.newEducation.startDate} 
                />
                <TextField      
                    type="date" 
                    label="End Date" 
                    name="endDate"
                    onChange={props.handleChange}
                    InputLabelProps={{shrink: true,}} 
                    value={props.newEducation.endDate} 
                />
            </Box>
            <FormControlLabel 
                control={
                    <Switch  
                        color="primary" 
                        checked={props.newEducation.active}  // the name is the same as the object name in the parent data
                        onChange={props.handleChange}
                        name="active"  // the name is the same as the object name in the parent data
                    />
                } 
                label="Active" />
            <TextField
                style={{
                    width:"100%",
                    
                }}
                id="outlined-basic"
                onChange={props.handleChange}
                name="educationText"
                value={props.newEducation.educationText} 
                variant="outlined"
                multiline={true}
            />
            
                <Button
                    variant="outlined"
                    className={classes.buttonStyle}
                    disabled={btnDisabled}
                    onClick={props.handleSave}
                >
                    Save
                </Button>
            </Paper>
        </Modal>
    )
}
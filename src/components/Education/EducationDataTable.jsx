import {React, useState} from "react";
import {makeStyles, Box, Typography, Grid, Avatar, Chip, IconButton, Collapse, Modal, TextField, Backdrop, Button, InputLabel, Select, FormControl, MenuItem} from "@material-ui/core";
import {Event, MoreHoriz, Delete, Edit, Publish, Cancel} from "@material-ui/icons";


const useStyles = makeStyles((theme) =>({
    buttonStyle:{
        marginTop:"20px",
        left:"90%",
        [theme.breakpoints.down("sm")]: {
            left:"80%"
        }
    },
    rootContainer:{
        width:"94%",     
    },
    dataContainer:{
        whiteSpace: 'nowrap',
        display:"flex",
        alignItems:"center",
        height: "10vh",
        width: "100%",
        backgroundColor: 'white',
        marginTop:"20px",
        transition: "all 1s cubic-bezier(.25,.8,.25,1)",
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            boxShadow: "0 5px 10px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.12)",
        },
    },
    avatarContainer:{
        marginLeft:"20px",
        width:"5%",
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    },
    schoolName:{
        display:"inline-block",
        width:"10%",
        marginRight:"50px",
        fontWeight:"bold",
        overflow:"hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.down("md")]:{
            marginLeft:"20px",
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
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
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
        marginLeft:"12%",
        [theme.breakpoints.down("md")]:{
            marginLeft:"0%",   
        }
    },
    modal:{
        position: 'absolute',
        top: "50%",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60vw",
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
    }
}))

//dummy data for the data table
const schoolName = "Anchor University Lagos"
const degree = "BSc."
const startDate = "10-20-2022"
const endDate = "10-20-2022"
const active = false


const EducationDataTable = () => {
    const [educationText, setEducationText] = useState("")
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openOptions, setOpenOptions] = useState(false)
    const handleClick = () => {
        setOpenOptions(!openOptions);
    };
   const classes = useStyles()
    return (
        <div className={classes.rootContainer}>
            <Box className={classes.dataContainer} boxShadow={1}>
                <Grid container className={classes.avatarContainer}>
                    <Grid item>
                        <Avatar>{schoolName[0]}</Avatar>
                    </Grid >
                </Grid> 
                <Typography variant="body1" className={classes.schoolName}>
                    {schoolName}
                </Typography>
                <Box className={classes.date}>
                    <Event fontSize="small" />
                    <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                        {startDate+ " - "+endDate}
                    </Typography>
                </Box>
                <Box className={classes.degreeBox}>
                    <Typography style={{margin:"0px 0px 2px 5px"}} variant="body1">
                        {degree}
                    </Typography>
                </Box>
                <Box className={classes.statusContainer}>
                    <Chip label={active ? "active" : "inactive" } color={active ? "primary": "textSecondary"} />    
                </Box>
                <Box className={classes.optionsBox}>
                    <Collapse in={openOptions} timeout="auto" >
                        <IconButton>
                            <Delete fontSize="small"/>
                        </IconButton>
                        <IconButton onClick={handleOpen}>
                            <Edit fontSize="small"/>
                        </IconButton>
                        {active ? "": <IconButton>
                            <Publish fontSize="small"/>
                        </IconButton>}
                    </Collapse>
                    <IconButton onClick={handleClick}>
                        {openOptions ? <Cancel fontSize="small"/> : <MoreHoriz fontSize="small"/> }
                    </IconButton>
                </Box>
                <Modal
                open={open}
                onClose={handleClose}
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
                        onClick={handleClose}
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
                        <FormControl    >
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                <MenuItem value={10}>BSc.</MenuItem>
                                <MenuItem value={20}>BA.</MenuItem>
                                <MenuItem value={30}>MSc.</MenuItem>
                            </Select>
                        </FormControl>
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
                    <TextField
                        style={{
                            width:"100%",
                            
                        }}
                        id="outlined-basic"
                        value={educationText} 
                        variant="outlined"
                        multiline={true}
                        onChange={(e) =>{setEducationText(e.target.value)}}
                    />
                    
                        <Typography id="modal-modal-description" style={{ mt: 2 }}>
                        </Typography>
                        <Button
                            variant="outlined"
                            className={classes.buttonStyle}
                            onClick={handleClose}
                        >
                            Save
                        </Button>
                    </Box>
                </Modal>
            </Box>        
        </div>
    );
}

export default EducationDataTable

import React, {useRef, useState} from "react"
import {makeStyles, Button,TextField, Typography, Modal, Backdrop, Box, IconButton } from "@material-ui/core"
import {Cancel, Edit} from "@material-ui/icons"

const useStyles= makeStyles((theme) =>({
    buttonStyle:{
        marginTop:"20px",
        left:"90%",
        [theme.breakpoints.down("sm")]: {
            left:"80%"
        }
    },
    modal:{
        position: 'absolute',
        top: "50%",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60vw",
        backgroundColor: 'white',
        overflowY:"auto",
        border: '1px solid #777',
        boxShadow: 24,
        padding: "20px 40px 60px",
        [theme.breakpoints.down("sm")]:{
            width: "100vw",
            padding: "20px 10px 30px",
        }
    },
}))

const About = () =>{
    const [aboutText, setAboutText] = useState("")
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const pDiv = useRef()
    const inputDiv = useRef()
    const classes = useStyles()

    return (
        <div 
            style={{
                width:"90%",
                marginBottom:40
            }}
            >
            <div
                style={{
                    display:"inline-block",
                    marginBottom:40
                }}  
            >
                <Typography
                    variant="h2"
                >
                    About
                </Typography>
            </div>
            <div 
                ref={pDiv}
                style={{
                    padding: "5px 3px",
                    border:"1px solid grey",
                    borderRadius:"5px",
                    }}>
                <Typography
                    style={{
                        padding: 10,
                        wordWrap:"break-word",
                        whiteSpace: "pre-line",
                    }}
                    variant="body1"
                >
                    {aboutText}
                </Typography>
                
            </div>
            <Button 
                variant="outlined"
                className={classes.buttonStyle}
                onClick={handleOpen}
                >
                    Edit <Edit style={{color:"grey", fontSize:"15px"}}/>
            </Button>
            <div ref={inputDiv} >
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
                    <TextField
                        style={{
                            width:"100%",
                            
                        }}
                        id="outlined-basic" 
                        variant="outlined"
                        value={aboutText}
                        multiline={true}
                        onChange={(e) =>{setAboutText(e.target.value)}}
                    />
                    <Button 
                        variant="outlined"
                        className={classes.buttonStyle}
                        onClick={handleClose}
                        >
                            Save
                    </Button>
                </Box>
            </Modal>
            </div>
        </div>)
}

export default About
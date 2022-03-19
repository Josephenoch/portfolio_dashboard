import React, {useEffect, useState} from "react"
import {makeStyles, Button,TextField, Typography, Modal, Backdrop, IconButton, Paper } from "@material-ui/core"
import {Cancel, Edit} from "@material-ui/icons"

const useStyles= makeStyles((theme) =>({
    buttonStyle:{
        marginTop:"20px",
        left:"90%",
        backgroundColor:theme.palette.primary.main,
        color:"white",
        borderColor:"white",
        [theme.breakpoints.down("sm")]: {
            left:"80%"
        }
    },
    modal:{
        position: 'absolute',
        minHeight:"50vh",
        top: "50%",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60vw",
        height:"30vh",
        backgroundColor: theme.palette,
        overflowY:"scroll",
        overflowX:"hidden",
        border: '1px solid #777',
        boxShadow: 24,
        padding: "20px 40px 60px",
        [theme.breakpoints.down("sm")]:{
            width: "100vw",
            padding: "20px 10px 30px",
        },
        
    },
}))

export const Details = (props) =>{
    const [detailsText, setDetailsText] = useState("")
    const [editDetailsText, setEditDetailsText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if(!open){
            setEditDetailsText(detailsText)
        }
        setOpen(!open)
    };

    const handlSave = e =>{
        setDetailsText(editDetailsText)
        setOpen(!open)
    }
    
    useEffect(()=>{
        if(editDetailsText !== ""){
            setBtnDisabled(false)
        }
        else{
            setBtnDisabled(true)
        }
    },[editDetailsText])

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
                    {props.name}
                </Typography>
            </div>
            <div
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
                    {detailsText}
                </Typography>
                
            </div>
            <Button 
                variant="outlined"
                className={classes.buttonStyle}
                onClick={handleOpen}
                >
                    Edit <Edit style={{color:"white", fontSize:"15px"}}/>
            </Button>
            <div >
            <Modal
                open={open}
                onClose={handleOpen}
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
                        onClick={handleOpen}
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
                            minHeight:"70%",
                            
                        }}
                        id="outlined-basic" 
                        variant="outlined"
                        value={editDetailsText}
                        multiline={true}
                        onChange={(e) =>{setEditDetailsText(e.target.value)}}
                    />
                    <Button 
                        variant="outlined"
                        className={classes.buttonStyle}
                        disabled={btnDisabled}
                        onClick={handlSave}
                        >
                            Save
                    </Button>
                </Paper>
            </Modal>
            </div>
        </div>)
}

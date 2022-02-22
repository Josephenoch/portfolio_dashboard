import {React, useState} from 'react'
import { Box, Grid, Typography, makeStyles, IconButton,  Collapse, Chip, Avatar} from '@material-ui/core'
import {Event, MoreHoriz, Delete, Edit, Publish, Cancel} from "@material-ui/icons";
import EditExperience from "./EditExperience";

const useStyles = makeStyles((theme) => ({
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

    },
    roleText:{
        display:"inline-block",
        width:"10%",
        marginRight:"50px",
        fontWeight:"bold",
        overflow:"hidden",
      
    },
    date:{
        display:"flex",
        alignItems:"center",
        width: "25%",
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    },
    companyBox:{
        width:"10%",
        marginLeft:"50px",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
            marginLeft:"0px",
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
    }
    
}))

const ExperienceData = (props) => {
    const classes = useStyles()
    const [options, setOptions] = useState(false)
    const [modal, setModal] = useState(false);

    const handleOptions = () => {
        setOptions(!options)    
    };
    const handleModal = () => {
        setModal(!modal)    
    };

    return (
        <Box className={classes.dataContainer} boxShadow={1}>
            <Grid container className={classes.avatarContainer}>
                <Grid item>
                    <Avatar>CEO</Avatar>
                </Grid >
            </Grid> 
            <Typography variant="body1" className={classes.roleText}>
                {props.data.roleName}
            </Typography>
            <Box className={classes.date}>
                <Event fontSize="small" />
                <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                    {props.data.startDate+ " - "+props.data.endDate}
                </Typography>
            </Box>
            <Box className={classes.companyBox}>
                <Typography style={{margin:"0px 0px 2px 5px"}} variant="body1">
                    {props.data.company}
                </Typography>
            </Box>
            <Box className={classes.statusContainer}>
                <Chip label={props.data.active ? "active" : "inactive" } color={props.data.active ? "primary": "secondary"} />    
            </Box>
            <Box className={classes.optionsBox}>
                <Collapse in={options} timeout="auto" >
                    <IconButton onClick={props.handleDelete}>
                        <Delete fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleModal}>
                        <Edit fontSize="small"/>
                    </IconButton>
                    {props.data.active ? "": <IconButton>
                        <Publish fontSize="small"/>
                    </IconButton>}
                </Collapse>
                <IconButton onClick={handleOptions}>
                    {options ? <Cancel fontSize="small"/> : <MoreHoriz fontSize="small"/> }
                </IconButton>
            </Box>
            <EditExperience data={props.data} handleModal={handleModal} modal={modal}/>
        </Box>

  )
}
export default ExperienceData
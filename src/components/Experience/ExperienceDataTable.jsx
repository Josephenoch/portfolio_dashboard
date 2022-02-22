import {React, useState} from "react";
import {makeStyles, Box, Typography, Grid, Avatar, Chip, IconButton, Collapse, Modal, Backdrop} from "@material-ui/core";
import {Event, MoreHoriz, Delete, Edit, Publish, Cancel} from "@material-ui/icons";
import EditExperience from "./EditExperience";


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

    },
    roleText:{
        display:"inline-block",
        width:"10%",
        marginRight:"50px",
        fontWeight:"bold",
        overflow:"hidden",
        textOverflow:"ellipsis",
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

const ExperienceDataTable = () => {
    
    const [experienceData, setExperienceData] = useState([{
        "roleName" : "CEO",
        "id" : "1",
        "company" : "TPS",
        "startDate" : "10/20/2022",
        "endDate" : "10/20/2022",
        "active" : false
    },
      {
        "roleName" : "Developer",
        "id" : "2",
        "company" : "TPS",
        "startDate" : "10/20/2022",
        "endDate" : "10/20/2022",
        "active" : true
      },
      {
        "roleName" : "Thief",
        "id" : "3",
        "company" : "HiiT",
        "startDate" : "10/20/2022",
        "endDate" : "10/20/2022",
        "active" : true
      }  
    ])
    const open = experienceData.map((data ) => {return {"id": data.id, "optionsOpen":false, "modalOpen":false}} )
    const [modal, setModal] = useState(open);
    const handleModal = ((id) => {

        setModal(modal.map((mod) =>{ 
             if (mod.id===id) { 
                 return { ...mod, "modalOpen":!mod.modalOpen} 
            }
            return mod
        }))
            
    });


    const [openOptions, setOpenOptions] = useState(false)
    const handleClick = () => {
        setOpenOptions(!openOptions);
    };
   const classes = useStyles()
    return (
        <div className={classes.rootContainer}>
            {
                experienceData.map(data =>{
                    return( <Box className={classes.dataContainer} boxShadow={1}>
                            <Grid container className={classes.avatarContainer}>
                                <Grid item>
                                    <Avatar>CEO</Avatar>
                                </Grid >
                            </Grid> 
                            <Typography variant="body1" className={classes.roleText}>
                                {data.roleName}
                            </Typography>
                            <Box className={classes.date}>
                                <Event fontSize="small" />
                                <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                                    {data.startDate+ " - "+data.endDate}
                                </Typography>
                            </Box>
                            <Box className={classes.companyBox}>
                                <Typography style={{margin:"0px 0px 2px 5px"}} variant="body1">
                                    {data.company}
                                </Typography>
                            </Box>
                            <Box className={classes.statusContainer}>
                                <Chip label={data.active ? "active" : "inactive" } color={data.active ? "primary": "secondary"} />    
                            </Box>
                            <Box className={classes.optionsBox}>
                                <Collapse in={openOptions} timeout="auto" >
                                    <IconButton onClick={() => {setExperienceData(experienceData.filter( dat => dat.id !== data.id ))}}>
                                        <Delete fontSize="small" />
                                    </IconButton>
                                    <IconButton onClick={handleModal.bind(null, data.id)}>
                                        <Edit fontSize="small"/>
                                    </IconButton>
                                    {data.active ? "": <IconButton>
                                        <Publish fontSize="small"/>
                                    </IconButton>}
                                </Collapse>
                                <IconButton onClick={handleClick}>
                                    {openOptions ? <Cancel fontSize="small"/> : <MoreHoriz fontSize="small"/> }
                                </IconButton>
                            </Box>
                            <Modal
                            open={modal.modalOpen}
                            onClose={handleModal.bind(null, data.id)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            >
                             <EditExperience data={data} handleModal={handleModal.bind(null, data.id)}/>
                                     
                            </Modal>
                        </Box>
                    )
                }) 
            }       
        </div>
    );
}

export default ExperienceDataTable

import {React, useState} from "react";
import {makeStyles, Box, Typography, Grid, Avatar, Chip, IconButton, Collapse} from "@material-ui/core";
import {Event, MoreHoriz, Delete, Edit, Publish, Cancel} from "@material-ui/icons";


const useStyles = makeStyles((theme) =>({
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
        transition: "all 5s cubic-bezier(.25,.8,.25,1)",
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            boxShadow: "0 5px 10px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.12)",
        },
    },
    avatarContainer:{
        marginLeft:"20px",
        width:"5%",
        [theme.breakpoints.down("md")]:{
            width:"20%",
        }
    },
    roleText:{
        display:"inline-block",
        width:"10%",
        marginRight:"50px",
        fontWeight:"bold",
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
    companyBox:{
        width:"10%",
        marginLeft:50,
        display:"flex",
        alignItems:"center",
    },
    statusContainer:{
        marginLeft:100,
        display:"flex",
        alignItems:"center",
        borderRadius:20,
    },
    optionsBox:{
        display:"flex",
        marginLeft:"12%",
        [theme.breakpoints.down("md")]:{
            marginLeft:"13%",   
        }
    }
}))

//dummy data for the data table
const roleName = "CEO"
const company = "TPS"
const startDate = "10/20/2022"
const endDate = "10/20/2022"
const active = true


const DataTable = () => {
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
                        <Avatar>{roleName[0]}</Avatar>
                    </Grid >
                </Grid> 
                <Typography variant="body1" className={classes.roleText}>
                    {roleName.length<7 ? roleName : roleName+"..."}
                </Typography>
                <Box className={classes.date}>
                    <Event fontSize="small" />
                    <Typography variant="body1" style={{margin:"0px 0px 2px 5px",}}>
                        {startDate+ " - "+endDate}
                    </Typography>
                </Box>
                <Box className={classes.companyBox}>
                    <Typography style={{margin:"0px 0px 2px 5px"}} variant="body1">
                        {company}
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
                        <IconButton>
                            <Edit fontSize="small"/>
                        </IconButton>
                        <IconButton>
                            <Publish fontSize="small"/>
                        </IconButton>
                    </Collapse>
                    <IconButton onClick={handleClick}>
                        {openOptions ? <Cancel fontSize="small"/> : <MoreHoriz fontSize="small"/> }
                    </IconButton>
                </Box>
            </Box>        
        </div>
    );
}

export default DataTable

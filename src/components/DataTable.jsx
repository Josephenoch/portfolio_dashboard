import {React, useState} from "react";
import {makeStyles, Box, Typography, Grid, Avatar, Chip, IconButton} from "@material-ui/core";
import {Event, MoreHoriz} from "@material-ui/icons";


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
    }
}))

//dummy data for the data table
const roleName = "CEO"
const company = "TPS"
const startDate = "10/20/2022"
const endDate = "10/20/2022"
const active = false


const DataTable = () => {
    const [openOptions, setOpenOptions] = useState(false)
    const styles = useStyles()
    return (
        <div className={styles.rootContainer}>
            <Box className={styles.dataContainer} boxShadow={1}>
                <Grid 
                    container  
                    style={{
                        marginLeft:"20px",
                        width:"5%"}}>
                    <Grid item>
                        <Avatar>{roleName[0]}</Avatar>
                    </Grid >
                </Grid> 
                <Typography
                    variant="body1"
                    style={{
                        display:"inline-block",
                        width:"160px",
                        marginRight:"50px",
                        fontWeight:"bold"
                    }}
                >
                    {roleName.length<20 ? roleName : roleName+"..."}
                </Typography>
                <Box 
                    style={{
                        display:"flex",
                        alignItems:"center",
                        width: "25%"
                    }}
                >
                    <Event fontSize="small" />
                    <Typography
                        style={{
                            margin:"0px 0px 2px 5px"
                        }}
                        variant="body1"
                    >
                        {startDate+ " - "+endDate}
                    </Typography>
                </Box>
                <Box 
                    style={{
                        width:"10%",
                        marginLeft:50,
                        display:"flex",
                        alignItems:"center",
                    }}
                >
                    <Typography
                        style={{
                            margin:"0px 0px 2px 5px"
                        }}
                        variant="body1"
                    >
                        {company}
                    </Typography>
                </Box>
                <Box 
                    style={{
                        marginLeft:50,
                        display:"flex",
                        alignItems:"center",
                        borderRadius:20,
                    }}
                >
                    <Chip label={active ? "active" : "inactive" } color={active ? "primary": "secondary"} />    
                </Box>
                <IconButton>
                    <MoreHoriz/>

                </IconButton>
                {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    
                </Collapse> */}
            </Box>        
        </div>
    );
}

export default DataTable

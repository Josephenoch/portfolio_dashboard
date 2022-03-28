import {WorkOutlineOutlined, DeveloperMode, VerifiedUserOutlined, AssessmentOutlined,  SchoolOutlined, SettingsOutlined} from "@material-ui/icons"

import {Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Grid, Typography, Box} from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
   root:{
        display:"flex",
        zIndex:99,
        marginTop:"80px",
        width:"17%",
        backgroundColor:theme.palette.primary.appBar,
        height:"90vh",
        position: "fixed",
        top: "0px",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection:"column",
        [theme.breakpoints.down('md')]:{
            display:"none"
        }
   },
   
   
   userDetails:{
       marginLeft:5,
       marginTop:20, 
       textDecoration:"none", 
       color:theme.palette.type ==="dark" ? "white" : "black",
       whiteSpace:"no-wrap"
   },
    userDetailsText:{
        marginLeft:"10px",
        width:"200px",
        overflow: "hidden",
        textOverflow: "ellipsis",
    } 
}))

const Sidebar=((props) =>{
    const  classes = useStyles()
    return (
        <Box className = {classes.root} direction="column">
            <Box className={classes.userDetails} component={Link} to="/settings">
                <Grid container>
                    <Grid item>
                        <Avatar alt={`${props.user.firstName} ${props.user.lastName}`} src={props.user.avatar} />
                    </Grid >
                    <Grid item>
                        <Typography 
                            variant="body2"  
                            className={classes.userDetailsText}
                        >
                                {`${props.user.firstName} ${props.user.lastName}`}
                        </Typography>
                        <Typography 
                            variant="body2"
                            className={classes.userDetailsText}
                        >
                                {props.user.email}
                        </Typography>
                    </Grid >
                </Grid>
            </Box>
            <Box style={{marginTop:"30px"}}>
                <List style={{ width: '120%', bgcolor: 'background.paper', marginLeft:-20}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                        >
                    <ListItem 
                        button 
                        key="Dashboard" 
                        component={Link} 
                        to={'/portfolio_dashboard'}
                    >   
                        <ListItemIcon>
                            <AssessmentOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem 
                        button 
                        key="Experience" 
                        component={Link} 
                        to={'/Experience'}
                    >
                        <ListItemIcon>
                            <WorkOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Experience" />
                    </ListItem>
                    <ListItem 
                        button 
                        key="Education" 
                        component={Link} 
                        to={'/Education'}
                    >
                        <ListItemIcon>
                            <SchoolOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Education" />
                    </ListItem>
                    <ListItem 
                        button 
                        key="Skill" 
                        component={Link} 
                        to={'/Skill'} 
                    >
                        <ListItemIcon>
                            <DeveloperMode />
                        </ListItemIcon>
                        <ListItemText primary="Skills" />
                    </ListItem>
                    <ListItem button key="Certificates">
                        <ListItemIcon>
                            <VerifiedUserOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Certificates" />
                    </ListItem>
                    <ListItem 
                        button 
                        key="Settings" 
                        style={{
                            background:"linear-gradient(90deg, rgb(111,227,255) 0%, rgb(47,199,245) 35%)", 
                            color:"white", 
                            marginTop:50,
                        }}
                        component={Link} 
                        to={'/Settings'}
                    >
                        <ListItemIcon>
                            <SettingsOutlined style={{color:"white"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List> 
            </Box>
        </Box>
    )
})
export default Sidebar
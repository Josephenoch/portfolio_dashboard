import {WorkOutlineOutlined, DeveloperMode, VerifiedUserOutlined, AssessmentOutlined,  SchoolOutlined, SettingsOutlined} from "@material-ui/icons"

import userImg from "../assets/user.jpg"
import {Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Grid, Typography} from "@material-ui/core";
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
       marginLeft:5
   } 
}))
const fname = "John"
const lname = "Doe"
const email = "johndoe@gmail.com"
const Sidebar=(() =>{
   const  classes = useStyles()
    return (
        <div className = {classes.root} direction="column">
            <div style={{marginTop:20}}>
                <Grid container>
                    <Grid item>
                        <Avatar alt="Joseph Enoch" src={userImg} />
                    </Grid >
                    <Grid item className={classes.userDetails}>
                        <Typography 
                            variant="body2"  
                            style={{
                                width:"200px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                                {`${fname} ${lname}`}
                        </Typography>
                        <Typography 
                            variant="body2"
                            style={{
                                width:"200px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                                {email}
                        </Typography>
                    </Grid >
                </Grid>
            </div>
            <div style={{marginTop:"30px"}}>
                <List style={{ width: '120%', bgcolor: 'background.paper', marginLeft:-20}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                        >
                    <ListItem button key="Dashboard" component={Link} to={'/portfolio_dashboard'}>   
                        <ListItemIcon>
                            <AssessmentOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button key="Experience" component={Link} to={'/Experience'}>
                        <ListItemIcon>
                            <WorkOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Experience" />
                    </ListItem>
                    <ListItem button key="Education" component={Link} to={'/Education'}>
                        <ListItemIcon>
                            <SchoolOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Education" />
                    </ListItem>
                    <ListItem button key="Skill" component={Link} to={'/Skill'}>
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
            </div>
        </div>
    )
})
export default Sidebar
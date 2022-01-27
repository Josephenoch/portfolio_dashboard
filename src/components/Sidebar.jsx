import {WorkOutlineOutlined, DeveloperMode, FavoriteBorderOutlined, VerifiedUserOutlined, AssessmentOutlined,  SchoolOutlined, SettingsOutlined} from "@material-ui/icons"

import userImg from "../assets/cropped.png"
import {Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
   root:{
        display:"flex",
        zIndex:99,
        marginTop:"80px",
        width:"17%",
        backgroundColor:"#fff",
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
       marginLeft:10
   } 
}))
const name = "Joseph"
const email = "enochjoseph01@gmail.com"
const Sidebar=(() =>{
   const  classes = useStyles()
    return (
        <div  className = {classes.root} direction="column">
            <div style={{marginTop:20}}>
                <Grid container>
                    <Grid item>
                        <Avatar alt="Joseph Enoch" src={userImg} />
                    </Grid >
                    <Grid item className={classes.userDetails}>
                        <Typography variant="body2">{name}</Typography>
                        <Typography variant="body2">{email}</Typography>
                    </Grid >
                </Grid>
            </div>
            <div style={{marginTop:"30px"}}>
                <List style={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                        >
                    <ListItem button key="Dashboard" component={Link} to={'/'}>   
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
                    <ListItem button key="Education">
                        <ListItemIcon>
                            <SchoolOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Education" />
                    </ListItem>
                    <ListItem button key="Skills">
                        <ListItemIcon>
                            <DeveloperMode />
                        </ListItemIcon>
                        <ListItemText primary="Skills" />
                    </ListItem>
                    <ListItem button key="Interests">
                        <ListItemIcon>
                            <FavoriteBorderOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Interests" />
                    </ListItem>
                    <ListItem button key="Certificates">
                        <ListItemIcon>
                            <VerifiedUserOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Certificates" />
                    </ListItem>
                    <ListItem button key="Settinfs" style={{background:"linear-gradient(90deg, rgba(111,227,255,1) 0%, rgba(47,199,245,1) 35%)", color:"white", marginTop:50,}}>
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
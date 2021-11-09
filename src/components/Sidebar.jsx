import { InfoOutlined, WorkOutlineOutlined, DeveloperMode, FavoriteBorderOutlined, VerifiedUserOutlined, AssessmentOutlined,  SchoolOutlined} from "@material-ui/icons"

import userImg from "../assets/cropped.png"
import {Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Grid, Typography} from "@material-ui/core";


const useStyles = makeStyles({
   root:{
        marginTop:"10vh",
        width:"17%",
        backgroundColor:"#fff",
        height:"90vh",
        position: "fixed",
        top: "0px",

   },
  
   userDetails:{
       marginLeft:10
   } 
})
const name = "Joseph"
const email = "enochjoseph01@gmail.com"
const Sidebar=(() =>{
   const  classes = useStyles()
    return (
        <Grid container className = {classes.root} direction="column" alignItems="center">
            <Grid item>
                <Grid container>
                    <Grid item>
                        <Avatar alt="Joseph Enoch" src={userImg} />
                    </Grid >
                    <Grid item className={classes.userDetails}>
                        <Typography variant="body2">{name}</Typography>
                        <Typography variant="body2">{email}</Typography>
                    </Grid >
                </Grid>
            </Grid>
            <Grid item style={{marginTop:"30px"}}>
                <List style={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                        >
                    <ListItem button key="Dashboard" >
                        <ListItemIcon>
                            <AssessmentOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button key="About">
                        <ListItemIcon>
                            <InfoOutlined />
                        </ListItemIcon>
                        <ListItemText primary="About" style={{width:"17 0px"}}/>
                    </ListItem>
                    <ListItem button key="Experience">
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
                </List> 
            </Grid>
        </Grid>
    )
})
export default Sidebar
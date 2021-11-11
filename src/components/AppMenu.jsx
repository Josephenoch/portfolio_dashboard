import { InfoOutlined, WorkOutlineOutlined, DeveloperMode, FavoriteBorderOutlined, VerifiedUserOutlined, AssessmentOutlined, SchoolOutlined, SettingsOutlined } from "@material-ui/icons"
import {List, ListItemIcon, ListItemText, ListItem, } from "@material-ui/core/"


const AppMenu = () => {
   
    return (
           <div> 
                <List style={{ width: '100%', bgcolor: 'background.paper' }}
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
                        <ListItemText primary="About"/>
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
                    <ListItem button key="Settings" style={{ background: "linear-gradient(90deg, rgba(111,227,255,1) 0%, rgba(47,199,245,1) 35%)", color: "white", marginTop: 50, }}>
                        <ListItemIcon>
                            <SettingsOutlined style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
           </div>
    )
}

export default AppMenu
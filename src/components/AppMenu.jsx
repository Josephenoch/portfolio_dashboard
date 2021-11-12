import { InfoOutlined, WorkOutlineOutlined, DeveloperMode, FavoriteBorderOutlined, VerifiedUserOutlined, AssessmentOutlined, SchoolOutlined } from "@material-ui/icons"
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
                        <ListItemText secondary="Dashboard" />
                    </ListItem>
                    <ListItem button key="About">
                        <ListItemIcon>
                            <InfoOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="About"/>
                    </ListItem>
                    <ListItem button key="Experience">
                        <ListItemIcon>
                            <WorkOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Experience" />
                    </ListItem>
                    <ListItem button key="Education">
                        <ListItemIcon>
                            <SchoolOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Education" />
                    </ListItem>
                    <ListItem button key="Skills">
                        <ListItemIcon>
                            <DeveloperMode />
                        </ListItemIcon>
                        <ListItemText secondary="Skills" />
                    </ListItem>
                    <ListItem button key="Interests">
                        <ListItemIcon>
                            <FavoriteBorderOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Interests" />
                    </ListItem>
                    <ListItem button key="Certificates">
                        <ListItemIcon>
                            <VerifiedUserOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Certificates" />
                    </ListItem>
                </List>
           </div>
    )
}

export default AppMenu
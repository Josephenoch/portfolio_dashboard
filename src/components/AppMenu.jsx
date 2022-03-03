import {WorkOutlineOutlined, DeveloperMode, VerifiedUserOutlined, AssessmentOutlined, SchoolOutlined } from "@material-ui/icons"
import {List, ListItemIcon, ListItemText, ListItem, } from "@material-ui/core/"
import { Link } from "react-router-dom"


const AppMenu = () => {
   
    return (
           <div> 
                <List style={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button key="Dashboard" component={Link} to={'/portfolio_dashboard'}>
                        <ListItemIcon>
                            <AssessmentOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Dashboard" />
                    </ListItem>
                    <ListItem button key="Experience" component={Link} to={'/Experience'}>
                        <ListItemIcon>
                            <WorkOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Experience" />
                    </ListItem>
                    <ListItem button key="Education" component={Link} to={'/Education'}>
                        <ListItemIcon>
                            <SchoolOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Education" />
                    </ListItem>
                    <ListItem button key="Skills" component={Link} to={'/Skill'}>
                        <ListItemIcon>
                            <DeveloperMode />
                        </ListItemIcon>
                        <ListItemText secondary="Skills" />
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
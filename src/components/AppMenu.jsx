import {WorkOutlineOutlined, DeveloperMode, VerifiedUserOutlined, AssessmentOutlined, SchoolOutlined } from "@material-ui/icons"
import {List, ListItemIcon, ListItemText, ListItem, Box } from "@material-ui/core/"
import { Link } from "react-router-dom"


const AppMenu = (props) => {
    return (
           <Box> 
                <List style={{ width: '100%', }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem onClick={props.handleToggle} button key="Dashboard" component={Link} to={'/portfolio_dashboard'}>
                        <ListItemIcon>
                            <AssessmentOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Dashboard" />
                    </ListItem>
                    <ListItem onClick={props.handleToggle} button key="Experience" component={Link} to={'/Experience'}>
                        <ListItemIcon>
                            <WorkOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Experience" />
                    </ListItem>
                    <ListItem onClick={props.handleToggle} button key="Education" component={Link} to={'/Education'}>
                        <ListItemIcon>
                            <SchoolOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Education" />
                    </ListItem>
                    <ListItem onClick={props.handleToggle} button key="Skills" component={Link} to={'/Skill'}>
                        <ListItemIcon>
                            <DeveloperMode />
                        </ListItemIcon>
                        <ListItemText secondary="Skills" />
                    </ListItem>
                    <ListItem onClick={props.handleToggle} button key="Certificates">
                        <ListItemIcon>
                            <VerifiedUserOutlined />
                        </ListItemIcon>
                        <ListItemText secondary="Certificates" />
                    </ListItem>
                </List>
           </Box>
    )
}

export default AppMenu
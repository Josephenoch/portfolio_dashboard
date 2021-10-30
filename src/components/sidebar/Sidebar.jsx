import React,{useState} from 'react'
import "./sidebar.css"
import { ExpandMore, ExpandLess, Search, SettingsOutlined, InfoOutlined, WorkOutlineOutlined, DeveloperMode, FavoriteBorderOutlined, VerifiedUserOutlined, AssessmentOutlined, HomeOutlined, SchoolOutlined, LibraryBooksOutlined, ExitToAppOutlined} from "@material-ui/icons"
import logo from "../../assets/Webfolio.jpg"
import {Collapse, IconButton, InputAdornment, TextField, Avatar, List, ListItem, ListItemIcon, ListItemText, } from "@material-ui/core";


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`.toUpperCase(),
    };
}

const name = "Joseph"
const email = "enochjoseph01@gmail.com"
const Sidebar=(() =>{
    const [searchText, setSearchText] = useState("")
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className = "sidebar">
            <div className = "sidebarWrapper">
                <div className = "sidebarMenu">
                    <div className = "logo"><img src = {logo} alt = "logo"></img></div>

                        <TextField 
                        type="search"
                        size="small"
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)}}
                        variant="outlined"
                        className="textField"
                        InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <Search/>
                                        </IconButton>
                                    </InputAdornment>
                                )
                               
                            }}
                        />

                    <div className = "sidebarList">
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                             >
                            <ListItem button key="About" className="sidebarListItem active" >
                                <ListItemIcon> <HomeOutlined/></ListItemIcon>
                                <ListItemText  primary="Home" />
                            </ListItem> 
                            <ListItem button key="About" >
                                <ListItemIcon> <AssessmentOutlined /></ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button  onClick={handleClick} >
                                <ListItemIcon> <LibraryBooksOutlined /></ListItemIcon>
                                <ListItemText primary="Content" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <InfoOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="About" />
                                        </ListItem>
                                        <ListItem button sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <WorkOutlineOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="Experience"/>
                                        </ListItem>
                                        <ListItem button sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <SchoolOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="Education" />
                                        </ListItem>
                                        <ListItem button sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <DeveloperMode />
                                            </ListItemIcon>
                                            <ListItemText primary="Skills" />
                                        </ListItem>
                                        <ListItem button sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <FavoriteBorderOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="Interests" />
                                        </ListItem>
                                        <ListItem button sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <VerifiedUserOutlined />
                                                </ListItemIcon>
                                                <ListItemText primary="Certificates" />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                    <div className= "profile">
                        <div className = "profileWrapper">
                            <div className="avatar">
                                {name === "" ? <Avatar {...stringAvatar('Joseph Enoch')} /> : <Avatar alt="Joseph Enoch" src="/static/images/avatar/1.jpg" />}
                            </div> 
                            <div className="userInfo">
                                <h6>{name}</h6>
                                <h6>{email}</h6>
                            </div>
                            <div className="logout">
                                <IconButton>
                                    <ExitToAppOutlined/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
})
export default Sidebar
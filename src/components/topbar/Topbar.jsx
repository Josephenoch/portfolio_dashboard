import React from "react"
import "./topbar.css"
import {Avatar} from "@material-ui/core"
import {NotificationsNone, Settings}from '@material-ui/icons';

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

const name = ""

const Topbar = (() => {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Webfolio</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="notificationsBadge">2</span>
                    </div>   
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <div className="avatar"> 
                        {name === "" ? <Avatar {...stringAvatar('Joseph Enoch')} /> : <Avatar alt="Joseph Enoch" src="/static/images/avatar/1.jpg" />}
                    </div>
                </div>
            </div> 
        </div>
    )
})

export default Topbar

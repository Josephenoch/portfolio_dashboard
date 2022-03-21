import {useState} from 'react'
import logo from "../assets/Webfolio.jpg"
import smallLogo from "../assets/Webfolio - Small.jpg"
import AppMenu from "./AppMenu"
import { IconButton, Hidden, AppBar, Toolbar, Grid, makeStyles, Drawer} from "@material-ui/core"
import { Menu, Cancel, Settings, Message, WbSunny, NightsStay, Equalizer} from "@material-ui/icons"

import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) =>({ 
    root:{
        backgroundColor: theme.palette.primary.appBar,
        [theme.breakpoints.up("lg")]: {
            height: "80px",
        }
    },
   smallLogo: {
        width: "50px",
        marginTop: "12px",
        [theme.breakpoints.up("md")]:{
            display:"none"
        }
    },
    logo: {
        marginTop: "25px",
        width: "200px",
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    appMenu:{
        display:"none",
        [theme.breakpoints.down("md")]:{
            display:"Grid"
        }
    },
    menuIcon:{
        [theme.breakpoints.up("lg")]: {
            display: "none"
        },
        [theme.breakpoints.only("md")]: {
            marginTop:20
        }
    },
    drawerPaper:{
        marginTop:50
    },
    iconContainer:{
        [theme.breakpoints.up("lg")]:{
            marginTop:"1.7%",
        }
    }
}))
const Header = (props) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);   
    }
    const handleThemeMode = () =>{
        props.setDarkTheme(!props.darkTheme)
        window.localStorage.setItem("theme", !props.darkTheme)
          
    }
    const classes = useStyles()
    return (
        <AppBar color="default" className={classes.root} position="fixed" elevation={0}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <img src={smallLogo} alt="logo" className={classes.smallLogo} />
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                    <Grid item
                        className={classes.iconContainer}
                    >
                        <IconButton
                            component={Link}
                            to={"/Analytics"}
                        >
                            <Equalizer/>
                        </IconButton>
                        <IconButton
                            component={Link}
                            to={"/Settings"}
                        >
                            <Settings/>
                        </IconButton>
                        <IconButton onClick={handleThemeMode}>
                            {props.darkTheme ? <WbSunny/> : <NightsStay/>}
                        </IconButton>
                        <IconButton>
                            <Message/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleToggle} className={classes.menuIcon}> {open ? <Cancel /> : <Menu />} </IconButton>
                    </Grid>
                </Grid>
               
           </Toolbar>
            <Grid container className={classes.appMenu} >
                <Grid item>
                    <Hidden xsDown implementation="css">
                        <Drawer 
                            open={open} 
                            onClose={handleToggle}
                            elevation={false}
                            BackdropProps={{ invisible: true }}
                            variant="temporary"
                            anchor={"top"}
                            classes={{
                                paper: classes.drawerPaper
                              }}
                           
                            >
                            <AppMenu 
                                handleToggle={handleToggle}
                            />
                        </Drawer>
                    </Hidden>   
                </Grid>
            </Grid>
       </AppBar>
    )
}

export default Header
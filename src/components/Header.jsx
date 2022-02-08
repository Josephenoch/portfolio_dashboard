import {useState} from 'react'
import logo from "../assets/Webfolio.jpg"
import smallLogo from "../assets/Webfolio - Small.jpg"
import AppMenu from "./AppMenu"
import { IconButton, Collapse, AppBar, Toolbar, Grid, makeStyles, CssBaseline} from "@material-ui/core"
import { Menu, Cancel} from "@material-ui/icons"
const useStyles = makeStyles((theme) =>({ 
    root:{
        backgroundColor: "#FFFFFF",
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
    }
}))
const Header = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
        
    };
    const classes = useStyles()
    return (
        <AppBar color="primary" className={classes.root} position="fixed" elevation={0}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <img src={smallLogo} alt="logo" className={classes.smallLogo} />
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleClick} className={classes.menuIcon}> {open ? <Cancel /> : <Menu />} </IconButton>
                    </Grid>
                </Grid>
               
           </Toolbar>
         <CssBaseline/>
            <Grid container className={classes.appMenu} direction="row-reverse">
                <Grid item>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <AppMenu />
                    </Collapse>
                </Grid>
            </Grid>
       </AppBar>
    )
}

export default Header
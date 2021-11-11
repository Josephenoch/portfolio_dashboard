import {useState, useRef} from 'react'
import logo from "../assets/Webfolio.jpg"
import smallLogo from "../assets/Webfolio - Small.jpg"
import AppMenu from "./AppMenu"
import { IconButton, Collapse, AppBar, Toolbar, Grid, makeStyles, CssBaseline} from "@material-ui/core"
import { Menu, Cancel} from "@material-ui/icons"
const useStyles = makeStyles((theme) =>({ 
    root:{
        backgroundColor: "#FFFFFF",
       
        [theme.breakpoints.up("lg")]: {
            height: "94px",
        }
    },
   smallLogo: {
        width: "50px",
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
    }
}))
const Header = () => {
    const [open, setOpen] = useState(false);
    const appBar = useRef()
    const handleClick = () => {
        if (open) {
            appBar.current.height = "500px"
            console.log(appBar.current.height)
        }
        else {
            appBar.current.height = "50px"
        }
        setOpen(!open);
        
    };
    const classes = useStyles()
    return (
        <AppBar color="primary" className={classes.root} position="fixed" elevation={0} ref={appBar}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <img src={smallLogo} alt="logo" className={classes.smallLogo} />
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Grid>
                    
                </Grid>
           </Toolbar>
         <CssBaseline/>
            <Grid container className={classes.appMenu} direction="row-reverse">
                <Grid item>
                    <div>
                        <IconButton onClick={handleClick}> {open ? <Cancel /> : <Menu />} </IconButton>
                    </div>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <AppMenu />
                    </Collapse>
                </Grid>
            </Grid>
       </AppBar>
    )
}

export default Header
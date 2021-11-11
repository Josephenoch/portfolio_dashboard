import React from 'react'
import logo from "../assets/Webfolio.jpg"
import smallLogo from "../assets/Webfolio - Small.jpg"
import {AppBar, Toolbar, Grid, makeStyles, CssBaseline} from "@material-ui/core"

const useStyles = makeStyles((theme) =>({
    
    root:{
        backgroundColor: "#FFFFFF",
        height:"94px",
        [theme.breakpoints.down("sm")]: {
            height: "50px"
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
    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <AppBar color="primary" className={classes.root} position="fixed" elevation={0}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <img src={smallLogo} alt="logo" className={classes.smallLogo} />
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Grid>
                </Grid>
           </Toolbar>
         <CssBaseline/> 
       </AppBar>
    )
}

export default Header
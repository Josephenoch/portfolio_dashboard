import React from 'react'
import logo from "../assets/Webfolio.jpg"
import {AppBar, Toolbar, Grid, makeStyles, CssBaseline} from "@material-ui/core"

const useStyles = makeStyles({
    logo: {
        marginTop:"25px", 
        width: "200px",
        marginBottom: "20px"
    },
    root:{
        backgroundColor: "#FFFFFF",
        height:"94px"
    }
})
const Header = () => {
    const classes = useStyles()
    return (
        <AppBar color="primary" className={classes.root} position="fixed" elevation={0}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Grid>
                </Grid>
           </Toolbar>
         <CssBaseline/> 
       </AppBar>
    )
}

export default Header
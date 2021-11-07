import React from 'react'
import userImg from "../assets/cropped.png"
import {AppBar, Toolbar, Grid, makeStyles, CssBaseline} from "@material-ui/core"

const useStyles = makeStyles({
   roundedGrid1:{
        height: "30vh",
        width: "40%",
        borderRadius:"0% 100% 100% 0% / 0% 100% 0% 100% ",
        background: "-webkit-linear-gradient(120deg, rgba(19,125,197,1) 0%, rgba(0,212,255,1) 52%, rgba(33,153,234,1) 100%) " ,
        zIndex: "2"
   },
    roundedGrid2: {
        height: "17vh",
        width: "30%",
        borderRadius: "0% 100% 100% 0% / 30% 0% 100% 70% ",
        background: "#00d4ff",
        
    },
   root:{
       height: "30vh",
       background: "-webkit-linear-gradient(0deg, rgba(15,95,150,1) 0%, rgba(109,214,194,1) 15%, rgba(0,212,255,1) 100%)",
   },
   pic:{
       width:"25vh",
       height:"25vh",
       borderRadius:"50%",
       border: "4px solid white"
   }
})
const Header = () => {
    const classes = useStyles()
    return (
       <AppBar position="static" color="primary" className={classes.root}>
            <Toolbar style={{ margin: "0px", padding: "0px", position:"relative"}}>
                {/* the container for the lower shape */}
                <Grid container direction="row" justifyContent="left" alignItems="center" style={{position:"absolute", top:0}}>
                    <Grid item className={classes.roundedGrid1}></Grid>
                </Grid>
                {/* the image container */}
                <Grid container direction="row" justifyContent="left" alignItems="center" style={{ position: "absolute", top: "20vh", zIndex: "99", marginLeft:"5%"}}>
                    <Grid item className={classes.pic}><img alt="profileImage" src={userImg} style={{width:"24.5vh", height:"24.5vh",borderRadius:"50%"}}/></Grid>
                </Grid>
                {/* the container for the upper shape */}
                <Grid container direction="row" justifyContent="left" alignItems="flex-start" style={{position:"absolute"}}>
                    <Grid item className={classes.roundedGrid2}></Grid>
                </Grid>
               
           </Toolbar>
         <CssBaseline/> 
       </AppBar>
    )
}

export default Header
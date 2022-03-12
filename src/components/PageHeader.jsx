import React from "react"
import {makeStyles, Typography} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    headerDiv:{
        display:"flex",
        width:"100%",
        height:80,
        maxHeight:"10vh",
        backgroundColor:theme.palette,
        overflow:"visible",
        [theme.breakpoints.down("md")]:{
            marginTop:"1.4vh",
            maxHeight:"7vh",
        }
    },
    text:{
        marginLeft:50,
        color: "#aaa"
    },
    
}))

const PageHeader = (props) =>{
    const styles = useStyles()
    return (
        <div>
            <div className = {styles.headerDiv}>
                <Typography
                    variant="h3"
                    className = {styles.text}
                >
                    List of {props.title}
                </Typography>
                
            </div>
        </div>
    )
}

export default PageHeader
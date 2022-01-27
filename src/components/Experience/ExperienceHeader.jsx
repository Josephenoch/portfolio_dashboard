import React from "react"
import {makeStyles, Typography} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    headerDiv:{
        position:"relative",
        display:"flex",
        height:80,
        maxHeight:100,
        backgroundColor:"#ffffff",
        overflow:"visible",
 
    },
    text:{
        position:"absolute",
        marginLeft:50,
        color: "#aaa"
    },
    
}))

const ExperienceHeader = () =>{
    const styles = useStyles()
    return (
        <div>
            <div className = {styles.headerDiv}>
                <Typography
                    variant="h3"
                    className = {styles.text}
                >
                    List of Experience
                </Typography>
                
            </div>
        </div>
    )
}

export default ExperienceHeader
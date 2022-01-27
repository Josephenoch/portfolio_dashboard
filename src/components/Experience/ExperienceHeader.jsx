import React from "react"
import {makeStyles, Typography} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    headerDiv:{
        height:200,
        backgroundColor:"#ffffff"
    }
}))

const ExperienceHeader = () =>{
    const styles = useStyles()
    return (
        <div>
            List of Experience
            <div className={styles.headerDiv}>
                <Typography>
                    List of Experience
                </Typography>
            </div>
        </div>
    )
}

export default ExperienceHeader
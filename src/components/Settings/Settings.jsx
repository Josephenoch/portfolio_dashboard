import React from 'react'

import { Box, Button, makeStyles, Paper} from "@material-ui/core"




import { SettingsHeader } from './SettingsHeader'
import { EditUserDetails } from './EditUserDetails'




export const Settings = () => {
    
    const useStyles = makeStyles((theme)=>({
        rootContainer:{
            width:"100%",
            display:"flex",
            flexWrap:"wrap",
            minHeight:"89vh",
            justifyContent:"space-around"
        },
        contentContainer:{
            display:"flex",
            width:"98%",
            height:"95%",
            margin:"10px 0",
            alignItems:"center",
            flexDirection:"column"
        },
        buttonStyle:{
            marginTop:"20px",
            // left:"20%",
            backgroundColor:theme.palette.primary.main,
            color:"white",
            borderColor:"white",
            [theme.breakpoints.down("sm")]: {
                left:"80%"
            }
        },
        
    }))
    const classes = useStyles() 
    return (
        <Paper className={classes.rootContainer}>
            <Box
                className={classes.contentContainer}
                elevation={10}
            >
                <SettingsHeader/>
                <Box 
                    style={{
                        display:"flex",
                        width:"98%",
                        marginTop:"3%",
                        flexWrap:"wrap"
                    }}
                >
                    <EditUserDetails/>
                    <Box
                        style={{
                            width:"100%",
                            marginLeft:"2%",
                        }}
                    >
                    </Box>
                </Box>

               

            </Box>
            <Button
                className={classes.buttonStyle}
            >
                Save
            </Button>
        </Paper>
    )
}

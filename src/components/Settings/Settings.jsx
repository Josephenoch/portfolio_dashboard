import React from 'react'

import { Box,  makeStyles, Paper} from "@material-ui/core"




import { SettingsHeader } from './SettingsHeader'
import { EditUserDetails } from './EditUserDetails'




export const Settings = (props) => {
    
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
                    <EditUserDetails
                        user={props.user}
                        setUser={props.setUser}
                    />
                    <Box
                        style={{
                            width:"100%",
                            marginLeft:"2%",
                        }}
                    >
                    </Box>
                </Box>

               

            </Box>
           
        </Paper>
    )
}

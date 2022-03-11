import React, { useState } from 'react'

import {Paper, Box, TextField, Typography, useTheme, makeStyles, } from "@material-ui/core"
// import {WbSunny, NightsStay} from '@material-ui/icons'



import { SettingsHeader } from './SettingsHeader'
import { EditUserDetails } from './EditUserDetails'
import { Details } from '../Dashboard/Details'



export const Settings = () => {
    const theme = useTheme()
    
    const useStyles = makeStyles((theme)=>({
        rootContainer:{
            width:"100%",
            display:"flex",
            minHeight:"89vh",
            justifyContent:"center"
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
        <div className={classes.rootContainer}>
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

        </div>
    )
}

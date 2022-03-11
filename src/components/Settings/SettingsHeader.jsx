import { useTheme, Paper, Typography } from '@material-ui/core'
import React from 'react'


export const SettingsHeader = () => {
    const theme = useTheme()
    return (
        <Paper
            style={{
                width:"100%",
                height:'7vh',
                backgroundColor:theme.palette.primary.main,

                display:"flex",
                alignItems:"center"
            }}
        >
            <Typography
                variant="h4"
                style={{
                    marginLeft:"2%",
                    color:"white"
                }}
            >
                Settings
            </Typography>
        </Paper>
    )
}

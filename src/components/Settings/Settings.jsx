import React from 'react'

import {Paper, Box, Typography, useTheme, makeStyles} from "@material-ui/core"

import userImg from "../../assets/joseph.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme)=>({
    image:{
        height:"200px",
        width:"200px",
        margin:"auto",
        borderRadius:"20px",
        background:`url(${userImg})`,
        backgroundSize:"cover",
        display:"flex",
        alignItems:"center",
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        "&:hover":{
            opacity: 0.8,
            background:`url(${userImg})`,
            backgroundSize:"cover",
        },
        '&:hover $uploadIcon':{
            height:50,
        }
    },
    uploadIcon:{
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        overflow: "hidden",
        height: 0,
        margin:"auto",
        color:"white",
        
    }
}))
export const Settings = () => {
    const theme = useTheme()
    const classes = useStyles() 
    return (
        <div
            style={{
                width:"100%",
                display:"flex",
                height:"89vh",
                justifyContent:"center"
            }}
        >
            <Paper
                style={{
                    display:"flex",
                    width:"95%",
                    height:"95%",
                    margin:"10px 0",
                    alignItems:"center",
                    flexDirection:"column"
                }}
                elevation={10}
            >
                <Paper

                    style={{
                        width:"100%",
                        height:'10%',
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
                <Box 
                    style={{
                        marginTop:"20px",
                        display:"flex",
                        width:"98%",
                        
                    }}
                >
                    <Paper
                        elevation={5}
                        className='userDetails'
                        style={{
                            width:"49%",
                            marginRight:"2%"
                        }}
                    >
                        <Typography
                            variant="h5"
                            style={{
                                marginLeft:"5%",
                                marginTop:"3%"
                            }}
                        >
                            User Details
                        </Typography>
                    </Paper>
                    <Paper
                        className='userDetails'
                        elevation={5}
                        style={{
                            width:"49%",
                            height:"40vh"
                        }}
                    >
                        <Typography
                            variant="h5"
                            style={{
                                marginLeft:"5%",
                                marginTop:"3%"
                            }}
                        >
                            User Image
                        </Typography>
                        <label for="image-input">
                            <Box
                                className={classes.image}
                            >
                                <FontAwesomeIcon
                                    icon={"fa-solid fa-cloud-arrow-up"}
                                    className={classes.uploadIcon}
                                />
                            </Box>
                        </label>    
                        <input 
                            id="image-input" 
                            type="file" 
                            style={{
                                display:"none"
                            }}
                        />
                    </Paper>
                </Box>

            </Paper>

        </div>
    )
}

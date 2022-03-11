import React, { useState } from 'react'

import {Paper, Box, TextField, Typography, useTheme, makeStyles, Input  } from "@material-ui/core"
// import {WbSunny, NightsStay} from '@material-ui/icons'

import userImage from "../../assets/joseph.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Settings = () => {
    const theme = useTheme()
    const [userImg, setUserImg] = useState(userImage)
    const handleFileChange = (e) =>{
        if(e.target.files[0]){
            setUserImg(URL.createObjectURL(e.target.files[0]))
        }
    }
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
            <Box
                style={{
                    display:"flex",
                    width:"98%",
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
                        display:"flex",
                        width:"98%",
                        marginTop:"3%"
                    }}
                >
                    <Box
                        className='userDetails'
                        style={{
                            width:"49%",
                            marginRight:"2%",
                            
                        }}
                    >
                        <Typography
                            variant="h5"
                            style={{
                                marginLeft:"5%",
                                
                            }}
                        >
                            Your Details
                        </Typography>
                        <Box 
                            style={{
                                width:"100%",
                                marginLeft:"30px",
                                marginTop:"20px"
                            }}
                        >
                            <TextField 
                                label="First Name"
                                variant="outlined" 
                                name="firstName" 
                                value="John"
                                style={{
                                    width:"100%",
                                    marginBottom:15
                                }}
                            />
                            <TextField 
                                label="Last Name"
                                variant="outlined" 
                                name="lastName" 
                                value="Doe"
                                style={{
                                    width:"100%",
                                    marginBottom:15
                                }}
                            />
                            <TextField 
                                label="Phone Number"
                                variant="outlined" 
                                name="phoneNumber"
                                value="+234 901 234 5678" 
                                style={{
                                    width:"48%",
                                }}
                            />
                            <TextField 
                                label="Email Address"
                                variant="outlined" 
                                name="emailAddress" 
                                disabled={true}
                                value="johndoe@webfolio.com"
                                style={{
                                    width:"48%",
                                    marginLeft:"4%"
                                }}
                            />
                             

                        </Box>
                    </Box>
                    <Box
                        className='userDetails'
                        style={{
                            width:"49%",
                            height:"40vh",
                            marginTop:"4%"
                        }}
                    >
                        <label htmlFor="image-input">
                            <Box
                                className={classes.image}
                            >
                                <FontAwesomeIcon
                                    icon={"fa-solid fa-cloud-arrow-up"}
                                    className={classes.uploadIcon}
                                />
                            </Box>
                        </label>    
                        <Input 
                            id="image-input" 
                            type="file" 
                            style={{
                                display:"none"
                            }}
                            onChange={handleFileChange}
                        />
                    </Box>
                    {/* <WbSunny, NightsStay/> */}
                </Box>

            </Box>

        </div>
    )
}

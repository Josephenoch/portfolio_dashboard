import React, {useState} from 'react'

import { Box, Typography, TextField, makeStyles, Input } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import userImage from "../../assets/joseph.jpg"

export const EditUserDetails = () => {
    const [userImg, setUserImg] = useState(userImage)
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
    const [userDetails, setUserDetails] = useState({
        firstName:"John",
        lastName:"Doe",
        phoneNumber:"+234 901 234 5678",
        emailAddress:"johndoe@webfolio.com",
    })
    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        var newObj = {...userDetails}
        newObj = {...newObj,[name]:value}
        setUserDetails(newObj)
    }
    const handleFileChange = (e) =>{
        if(e.target.files[0]){
            setUserImg(URL.createObjectURL(e.target.files[0]))
        }
    }
    return (
        <Box
            style={{
                display:"flex",
                width:"100%",
            }}
        >
            <Box
                
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
                        onChange={handleChange}
                        value={userDetails.firstName}
                        style={{
                            width:"100%",
                            marginBottom:15
                        }}
                    />
                    <TextField 
                        label="Last Name"
                        variant="outlined" 
                        name="lastName" 
                        value={userDetails.lastName}
                        onChange={handleChange}
                        style={{
                            width:"100%",
                            marginBottom:15
                        }}
                    />
                    <TextField 
                        label="Phone Number"
                        variant="outlined" 
                        name="phoneNumber"
                        value={userDetails.phoneNumber}
                        onChange={handleChange} 
                        style={{
                            width:"48%",
                        }}
                    />
                    <TextField 
                        label="Email Address"
                        variant="outlined" 
                        name="emailAddress" 
                        disabled={true}
                        value={userDetails.emailAddress}
                        onChange={handleChange}
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
        </Box>
    )
}

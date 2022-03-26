import React, {useState} from 'react'

import { Box, Typography, TextField, makeStyles, Input, Paper, Button } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const EditUserDetails = (props) => {
    const [userDetails, setUserDetails] = useState(props.user)
    const useStyles = makeStyles((theme)=>({
        rootContainer:{
            display:"flex",
            width:"100%",
            flexWrap:"wrap",
            [theme.breakpoints.down("md")]:{
                height:"90vh"
            }
        },
        image:{
            height:"200px",
            width:"200px",
            margin:"auto",
            borderRadius:"20px",
            background:`url(${userDetails.avatar})`,
            backgroundSize:"cover",
            display:"flex",
            alignItems:"center",
            transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
            "&:hover":{
                opacity: 0.8,
                background:`url(${userDetails.avatar})`,
                backgroundSize:"cover",
            },
            '&:hover $uploadIcon':{
                height:50,
            },
            
        },
        uploadIcon:{
            transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
            overflow: "hidden",
            height: 0,
            margin:"auto",
            color:"white",
            
        },
        detailsBox:{
            width:"49%",
            marginRight:"2%",
            [theme.breakpoints.down("md")]:{
                width:"100%",
                marginRight:"0",
            }
            
        },
        textFieldBox:{
            width:"100%",
            marginLeft:"30px",
            marginTop:"20px",
            [theme.breakpoints.down("md")]:{
                marginLeft:"0px",
                marginTop:"20px",  
            }
        },
        imageContainer:{
            width:"49%",
            height:"40vh",
            marginTop:"4%",
            [theme.breakpoints.down("md")]:{
                width:"100%",
                height:"250px",
                order:"-1"
            }
        },
        buttonStyle:{
            marginBottom:"20px",
            left:"90%",
            backgroundColor:theme.palette.primary.main,
            color:"white",
            borderColor:"white",
            [theme.breakpoints.down("md")]: {
                marginTop:"20px",
                left:"80%"
            }
        },
        
    }))

    const classes = useStyles()
    
    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        var newObj = {...userDetails}
        if (e.target.type!=="file"){
            
            newObj = {...newObj,[name]:value}
        }
        else{
            if(e.target.files[0]){
                newObj = {...newObj,"avatar":URL.createObjectURL(e.target.files[0])}
            }
        }
        setUserDetails(newObj)

    }
    // const handleFileChange = (e) =>{
    //     if(e.target.files[0]){
    //         setUserImg(URL.createObjectURL(e.target.files[0]))
    //     }
    // }
    const handleSave = () => {
        props.setUser(userDetails)
    }
    return (
        <Paper
            className={classes.rootContainer}
        >
            <Box  
                className={classes.detailsBox}
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
                    className={classes.textFieldBox}
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
                        value={userDetails.email}
                        onChange={handleChange}
                        style={{
                            width:"48%",
                            marginLeft:"4%"
                        }}
                    />
                    

                </Box>
            </Box>
            <Box
                className={classes.imageContainer}
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
                    onChange={handleChange}
                />

            </Box>
            <Button
                className={classes.buttonStyle}
                onClick={handleSave}
            >
                Save
            </Button>
        </Paper>
    )
}

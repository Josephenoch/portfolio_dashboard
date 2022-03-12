import {React, useState} from 'react'
import { makeStyles, TextField, Button, Typography, IconButton, Paper } from '@material-ui/core'
import { CancelOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) =>({
    container:{
        width:"40%",
        backgroundColor: theme.palette,
        padding:"30px",
        borderRadius:"30px",
        height:"49vh",
        [theme.breakpoints.down("sm")]:{
              width:"80%",  
              marginTop:"30px"
          }
    },
    allSkills:{
        padding:"20px 20px 20px 0",
    },
    newSkill:{
        display:"inline-block",
        backgroundColor:"rgba(111,227,255,0.5)",
        padding: "2px 5px",
        borderRadius:"10px",
        margin:"5px 0 0 5px"
        
    },
    skillText:{
        fontSize: "0.8em"
    },
    buttonStyle:{
        backgroundColor:theme.palette.primary.main,
        color:"white"
    },
}))
const OtherSkills = () => {
    const classes = useStyles()
    const [newSkill, setNewSkill] = useState("")
    const [uniqueID, setUniqueID] = useState(0)
    const [skills, setSkills] = useState([])

    const handleClick = () => {
        if( newSkill !== ""){
            setUniqueID(uniqueID+1)

            setSkills([...skills, {
                "name":newSkill,
                "id": uniqueID
            }
        ])
            setNewSkill("")
        } 
    }
    
  return (
    <Paper className={classes.container}>
        <TextField
            variant="outlined"
            id="Other SKills"
            style={{
                width:"100%",
            }}
            disabled={skills.length >= 15 ? true : false}
            label="Add Skills"
            value = {newSkill}
            onChange={(e) =>{setNewSkill(e.target.value)}}
            InputProps={{endAdornment: <Button
                                            onClick={handleClick}
                                            disabled={skills.length >= 15 ? true : false}
                                            className={classes.buttonStyle}
                                        >
                                            Add
                                        </Button>}}
        />
        <div className={classes.allSkills}>
            {
                skills.map((skill => {
                    return (
                        <div className={classes.newSkill} key={skill.id}>
                            <Typography
                                className={classes.skillText}
                            >{skill.name}
                            <IconButton 
                                size="small"
                                onClick = {() => setSkills(skills.filter(skil => skil.id !== skill.id))}
                            >
                                <CancelOutlined style={{fontSize:"15px"}}/>
                            </IconButton>
                            </Typography>
                        </div>
                        )
                })
                )
            }
        </div>
    </Paper>
  )
}
export default  OtherSkills
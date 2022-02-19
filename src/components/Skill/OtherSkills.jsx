import {React, useState} from 'react'
import { makeStyles, TextField, Button, Typography, IconButton } from '@material-ui/core'
import { CancelOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) =>({
    container:{
        width:"40%",
        backgroundColor: "white",
        padding:"30px",
        borderRadius:"30px",
        height:"70%",
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
    }
}))
const OtherSkills = () => {
    const classes = useStyles()
    const [newSkill, setNewSkill] = useState()
    const [uniqueID, setUniqueID] = useState(0)
    const [skills, setSkills] = useState([])

    const handleClick = () => {
        setUniqueID(uniqueID+1)

        setSkills([...skills, {
            "name":newSkill,
            "id": uniqueID
        }])
        setNewSkill("")
    }

  return (
    <div className={classes.container}>
        <TextField
            variant="outlined"
            id="Other SKills"
            style={{
                width:"100%",
            }}
            label="Add Skills"
            value = {newSkill}
            onChange={(e) =>{setNewSkill(e.target.value)}}
            InputProps={{endAdornment: <Button
                                            onClick={handleClick}
                                        >
                                            Add
                                        </Button>}}
        />
        {
            skills.map((skill => {
                return (
                    <div className={classes.newSkill}>
                        <Typography
                            className={classes.skillText}
                        >{skill.name}
                        <IconButton 
                            size="small"
                            onClick = ""
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
  )
}
export default  OtherSkills
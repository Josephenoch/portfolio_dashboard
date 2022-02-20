import {React, useState} from 'react'
import {TextField, Button} from '@material-ui/core'
const WorkFlow = () => {
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
    <div>
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
                                        >
                                            Add
                                        </Button>}}
        />
    </div>
  )
}
export default  WorkFlow 
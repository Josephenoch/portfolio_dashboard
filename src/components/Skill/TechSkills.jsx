import {React, useState} from 'react'
import raw from "../../assets/fa.json"
import { makeStyles, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({
    techSkills:{
        width:"40%",
        backgroundColor: "white",
        height:"49vh",
        padding:"20px",
        borderRadius:"30px",
        [theme.breakpoints.down("sm")]:{
            width:"80%",
          }
    }
  
}))
const TechSkills = () => {
    const [datas, setDatas] = useState(Object.values(raw))
    const [usedIcons, setUsedIcons] =useState([])
    const classes = useStyles()
    const handleChange = (e, value) => {
        if (value !==null){
          setUsedIcons([...usedIcons, value])
          setDatas(datas.filter(item => item.unicode !== value.unicode));
        }
    }
  return (
    <div className={classes.techSkills}>
        <Autocomplete
        id="techSkills"
        disabled={usedIcons.length >=5 ? true : false}
        options={datas.filter((data)=>{return data.type.includes("fab")})}
        getOptionLabel={(option) => option.name}
        onChange={handleChange }
        renderInput={(params) => (
          <TextField {...params} label="Skill Icon" margin="normal" variant="outlined"  />
        )}
      />

        {
          usedIcons.map((icon => {
            return  (
              <div 
                style={{
                  cursor:"pointer",
                  display:"inline-block"
                }}
                onClick={() => {
                  setDatas([...datas, icon])
                  setUsedIcons(usedIcons.filter(usedIcon => usedIcon.unicode !== icon.unicode))
                }}
              >
                <FontAwesomeIcon 
                        key={icon.unicode} 
                        icon={"fa-brands fa-" + icon.name } 
                        size="2x" 
                        style={{margin:"20px 0 0 20px"}}/>
              </div>
            )
          })
          )
        }
    </div>
  )
}
export default TechSkills
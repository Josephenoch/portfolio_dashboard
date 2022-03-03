import {React, useState} from 'react';
import { MenuItem, FormControl, InputLabel, Select, makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import {Search} from "@material-ui/icons"

const useStyles = makeStyles((theme) =>({
    rootContainer:{
        display:"flex",
        alignItems:"center",
        width:"94%",
        marginTop:"7vh",
    },
    autoComplete:{
        width:"40%",
        [theme.breakpoints.down("md")]:{
            width:"80%"
        }
    }
}))
const EducationSearchBar = (props) => {
    const classes = useStyles()
    const [status, setStatus] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return (
        <div className={classes.rootContainer}>
           <Autocomplete
                className={classes.autoComplete }
                id="experienceAutoComplete"
                options={props.data}
                getOptionLabel={(option) => `${option.degree} in ${option.cOStudy} from ${option.instName}`}
                // onChange={handleChange }
                renderInput={(params) => (
                <TextField {...params} label="Search Experiences" margin="normal" variant="outlined"  />
                )}
            />
            <div style={{position:"absolute",right:"3.2%"}}>
                <FormControl variant="standard"  size="small">
                    <InputLabel id="demo-simple-select-standard-label" shrink>Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={status}
                        onChange={handleChange}
                        label="status" 
                    >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
export default EducationSearchBar
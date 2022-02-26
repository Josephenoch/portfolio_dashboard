import {React, useState} from 'react';
import { IconButton, Typography, TextField, MenuItem, FormControl, InputLabel, Select, makeStyles, } from '@material-ui/core';
import {Autocomplete } from '@material-ui/lab'
// import {Search} from "@material-ui/icons"

const useStyles = makeStyles((theme) =>({
    rootContainer:{
        display:"flex",
        alignItems:"center",
        width:"94%",
        marginTop:"7vh",
    }
}))
const ExperienceSearchBar = (props) => {
    const classes = useStyles()
    const [status, setStatus] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return (
        <div className={classes.rootContainer}>
            <Autocomplete
                id="experienceAutoComplete"
                style={{
                    width:"40%"
                }}
                options={props.data}
                getOptionLabel={(option) => option.position}
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
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
export default ExperienceSearchBar
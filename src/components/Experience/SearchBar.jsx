import {React, useState} from 'react';
import { IconButton, Typography, MenuItem, FormControl, InputLabel, Select, makeStyles } from '@material-ui/core';
import {Search} from "@material-ui/icons"

const useStyles = makeStyles((theme) =>({
    rootContainer:{
        display:"flex",
        alignItems:"center",
        width:"94%",
        marginTop:"7vh",
    }
}))
const SearchBar = () => {
    const classes = useStyles()
    const [status, setStatus] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return (
        <div className={classes.rootContainer}>
            <IconButton>
                <Search/>
            </IconButton>
            <Typography
                variant="h6"
                style={{borderBottom:"2px solid black", marginLeft:15}}
            >
                List
            </Typography>
            <Typography
                variant="h6"
                style={{marginLeft:15}}
            >
                List
            </Typography>
            <div style={{position:"absolute",right:"7.5%"}}>
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
export default SearchBar
import React,{useState} from 'react'
import "./sidebar.css"
import { Home, Search, Assessment } from "@material-ui/icons"
import logo from "../../assets/Webfolio.jpg"
import { IconButton, InputAdornment, TextField } from "@material-ui/core";

const Sidebar=(() =>{
   const [searchText, setSearchText] = useState("")
    return (
        <div className = "sidebar">
            <div className = "sidebarWrapper">
                <div className = "sidebarMenu">
                    <div className = "logo"><img src = {logo} alt = "logo"></img></div>

                        <TextField 
                        type="search"
                        size="small"
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)}}
                        variant="outlined"
                        InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <Search/>
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                    <ul className = "sidebarList">
                        <li className="sidebarListItem"><Home />Home</li>
                        <li className="sidebarListItem"><Assessment />Dashboard</li>
                        <li className="sidebarListItem"><Home />Home</li>
                        <li className="sidebarListItem"><Home />Home</li>
                    </ul>
                </div>
            </div>
        </div>
    )
})
export default Sidebar
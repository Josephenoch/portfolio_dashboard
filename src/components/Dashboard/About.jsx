import React, {useRef, useState, useEffect} from "react"
import { Button,TextField, Typography } from "@material-ui/core"


const About = () =>{
    const [aboutText, setAboutText] = useState("")
    const pDiv = useRef()
    const inputDiv = useRef()
    
    const saveAbout = () =>{
        if (pDiv.current && inputDiv.current){
            if (pDiv.current.style.display === "none"){
                pDiv.current.style.display = "block"
                inputDiv.current.style.display = "none"
            }
            else{
                pDiv.current.style.display = "none"
                inputDiv.current.style.display = "block"
             
            }
        }
    }

    return (
        <div 
            style={{
                width:"90%",
                marginBottom:40
            }}
            >
            <div
                style={{
                    display:"inline-block",
                    marginBottom:40
                }}  
            >
                <Typography
                    variant="h2"
                >
                    About
                </Typography>
            </div>
            <div 
                ref={pDiv}
                onClick={saveAbout}  
                style={{
                    cursor:"pointer",
                    padding: "5px 3px",
                    border:"1px solid grey",
                    borderRadius:"5px",
                    display:"none"
                    }}>
                <Typography
                    style={{
                        padding: 10,
                        wordWrap:"break-word",
                        whiteSpace: "pre-line",
                    }}
                    variant="body1"
                >
                    {aboutText}
                </Typography>
            </div>
            <div ref={inputDiv} > 
                <TextField
                    style={{
                        width:"100%",
                        
                    }}
                    id="outlined-basic" 
                    variant="outlined"
                    multiline={true}
                    onChange={(e) =>{setAboutText(e.target.value)}}
                />
                <Button 
                    variant="outlined"
                    style={{
                        marginTop:"20px",
                        left:"90%"
                    }}
                    onClick={saveAbout}
                    >
                        Save
                </Button>
            </div>
        </div>)
}

export default About
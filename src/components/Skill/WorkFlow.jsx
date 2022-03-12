import {React, useState} from 'react'
import {TextField, Button, makeStyles, IconButton, Typography, Paper} from '@material-ui/core'
import {CancelOutlined} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    workflowContainer:{
        width:"40%",
        backgroundColor:theme.palette,
        padding:"20px",
        borderRadius:"30px",
        marginTop:"5vh",
        height:"49vh",
        [theme.breakpoints.down("sm")]:{
            width:"80%",  
            marginTop:"30px"
        }
    },
    buttonStyle:{
        backgroundColor:theme.palette.primary.main,
        color:"white"
    },
    workflow:{
        padding:"20px",
    }
}))
const WorkFlow = () => {
    const classes = useStyles()
    const [newWorkflow, setNewWorkflow] = useState("")
    const [uniqueID, setUniqueID] = useState(0)
    const [workflow, setWorkflow] = useState([])

    const handleClick = () => {
        if( newWorkflow !== ""){
            setUniqueID(uniqueID+1)

            setWorkflow([...workflow, {
                "name":newWorkflow,
                "id": uniqueID
            }
        ])
            setNewWorkflow("")
        } 
    }
  return (
    <Paper className={classes.workflowContainer}>
        <TextField
            variant="outlined"
            id="Workflow"
            style={{
                width:"100%",
            }}
            disabled={workflow.length >= 6 ? true : false}
            label="Add Workflow"
            value = {newWorkflow}
            onChange={(e) =>{setNewWorkflow(e.target.value)}}
            InputProps={{endAdornment: <Button
                                            onClick={handleClick}
                                            disabled={workflow.length >= 6 ? true : false}
                                            className={classes.buttonStyle}
                                        >
                                            Add
                                        </Button>}}
        />
        <ul className={classes.workflow}>
            {
                workflow.map((work => {
                    return (
                        <li key={work.id}>
                            <Typography>{work.name}
                                <IconButton 
                                    size="small"
                                    onClick = {() => setWorkflow(workflow.filter(wor => wor.id !== work.id))}
                                >
                                    <CancelOutlined style={{fontSize:"15px"}}/>
                                </IconButton>
                            </Typography>
                        </li>
                        )
                })
                )
            }
        </ul>
    </Paper>
  )
}
export default  WorkFlow 
import {Table, TableBody, TableCell, TableContainer,TableRow, Avatar, Typography, makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) =>({
    messageText:{
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth:"300px"
    }
})) 



export const MessageComponent= (props)=> {
    const classes = useStyles() 
    return (
        
        <TableContainer component={props.component} style={{ width: `${props.width}%` }} elevation={5}>

            <Table style={{ minWidth: 300 }} aria-label="simple table">
                <TableBody>
                    {props.messages.map((row) => (
                        <TableRow
                            component={Link}
                            to={"/messages"}
                            onClick={()=> props.setActiveMessage(row)}
                            key={row.id}
                            style={{
                                textDecoration:"none"
                            }}
                            >
                            <TableCell style={{paddingRight:0, width:"10px"}}>
                                <Avatar src={row.avatar}/>
                                    
                            </TableCell >
                            <TableCell
                                style={{
                                    maxWidth:"200px",
                                }}
                                >
                                <Typography 
                                    variant="body1" 
                                    color="textPrimary"
                                    className={classes.messageText}
                                    > 
                                    {`${row.firstName} ${row.lastName}`}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary"
                                    className={classes.messageText}
                                > 
                                    {row.message[0].content}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                {String(row.message[0].date).slice(0,3)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


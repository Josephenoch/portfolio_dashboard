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
                    {props.rows.map((row) => (
                        <TableRow
                            component={Link}
                            to={"#"}
                            key={row.id}
                            style={{
                                textDecoration:"none"
                            }}
                            >
                            <TableCell style={{paddingRight:0, width:"10px"}}>
                                <Avatar>
                                    {row.name[0]}
                                </Avatar>
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
                                    {row.name}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary"
                                    className={classes.messageText}
                                > 
                                    {row.message}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                {row.timeStamp}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


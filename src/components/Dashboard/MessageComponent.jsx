import {Table, TableBody, TableCell, TableContainer,TableRow, Paper, Avatar, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    messageText:{
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    }
})) 
function createData(name, email, message, timeStamp ) {
    return { name, email, message, timeStamp};
}

const rows = [
    createData('Jameson Isreal',"jamesonisreal@webfolio.com", "Hi I am Jameson! I've got interesting news", "3:20AM" ),
    createData('Jane Doe', "janedoe@webfolio.com", "Hello this is a greeting", "9:50AM"),
    createData('Theresa Mayweather',"theresamayweather@webfolio.com", "Welcome to Webfolio" , "10:50AM"),
    createData('Lupita Nyongo',"lupitanyongo@webfolio.com", "12 Years a slave was amazing!", "3/19/2020" ),
    createData('Leonardo Dicaprio', "leonardodicaprio@webfolio.com", "The Great Gatsby was a blast", "Yesterday"),
];


export const MessageComponent= ()=> {
    const classes = useStyles() 
    return (
        
        <TableContainer component={Paper} style={{ width: "90%" }} elevation={5}>

            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            >
                        <TableCell style={{paddingRight:0, width:"10px"}}>
                                <Avatar component={Paper}>
                                    {row.name[0]}
                                </Avatar>
                            </TableCell >
                            <TableCell
                                style={{
                                    maxWidth:"300px",
                                }}
                                >
                                <Typography 
                                    variant="body1" 
                                    color="textPrimary"
                                    className={classes.messageText}
                                    style={{maxWidth:"200px"}}
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


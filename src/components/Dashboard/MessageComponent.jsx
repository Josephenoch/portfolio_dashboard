import {Table, TableBody, TableCell, TableContainer,TableRow, Paper, Avatar, Typography} from '@material-ui/core';

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

    return (
        
        <TableContainer component={Paper} style={{ width: "90%" }} elevation={5}>

            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            style={{ '&:last-child td, &:last-child th': { border: 0}}}>
                        <TableCell style={{paddingRight:0, width:"10px"}}>
                                <Avatar>
                                    {row.name[0]}
                                </Avatar>
                            </TableCell >
                            <TableCell>
                                <Typography 
                                    variant="body1" 
                                    color="textPrimary"> 
                                    {row.name}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary"> 
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


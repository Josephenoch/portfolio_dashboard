import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar} from '@material-ui/core';

function createData(name, email, message, timeStamp ) {
    return { name, email, message, timeStamp};
}

const rows = [
    createData('John Doe',"janedoe@webfolio.com", "Hello this is a greeting", "9:50AM" ),
    createData('Jane Doe',),
    createData('Eclair', ),
    createData('Cupcake', ),
    createData('Gingerbread',),
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
                            <TableCell>
                                <Avatar>
                                    {row.name[0]}
                                </Avatar>
                            </TableCell>
                            <TableCell>
                                {row.name}<br/>
                                {row.message}
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


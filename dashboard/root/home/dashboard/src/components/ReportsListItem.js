import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { format } from 'date-fns'

const ReportsListItem = (props) =>{
    const {row, onClick} = props;
    return <TableRow onClick={()=>onClick(row._id)}>
        <TableCell component="th" scope="row">
            {row.repositoryName}
        </TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{format(row.scanningAt, 'MM/dd/yyyy')}</TableCell>
        <TableCell align="right">{row.findings.length}</TableCell>
    </TableRow>
};

export default ReportsListItem

import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useStore} from "../store/useStore";
import ReportsListItem from '../components/ReportsListItem'
import Wrapper from '../components/Wrapper'

const ReportsListPage = props =>{
    const {state} = useStore();
    const reportClick = (id)=> props.history.push(`/report/${id}`);

    return(
        <Wrapper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Repository Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Scanning At</TableCell>
                        <TableCell align="right">Finding</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.reports.map(row => (
                        <ReportsListItem
                            key={row._id}
                            row={row}
                            onClick={reportClick}
                        />
                    ))}
                </TableBody>
            </Table>
        </Wrapper>
    )
}
export default ReportsListPage

import React from "react";
import Grid from "@material-ui/core/Grid";
import { format } from 'date-fns'
import {useStore} from "../store/useStore";
import FindingItem from '../components/FindingItem';
import Wrapper from '../components/Wrapper'
import Name from '../components/Name';

const ReportPage = props =>{
    const {state} = useStore();
    const report = state.reports.find(item=> item._id === props.match.params.id);
    return <Wrapper>
        {!!report &&
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Name>ID:</Name>
            </Grid>
            <Grid item xs={9}>{report._id}</Grid>

            <Grid item xs={3}>
                <Name>Repository Name:</Name>
            </Grid>
            <Grid item xs={9}>{report.repositoryName}</Grid>

            <Grid item xs={3}>
                <Name>Status:</Name>
            </Grid>
            <Grid item xs={9}>{report.status}</Grid>

            <Grid item xs={3}>
                <Name>Queued At:</Name>
            </Grid>
            <Grid item xs={9}>{format(report.queuedAt, 'MM/dd/yyyy')}</Grid>

            <Grid item xs={3}>
                <Name>Scanning At:</Name>
            </Grid>
            <Grid item xs={9}>{format(report.scanningAt, 'MM/dd/yyyy')}</Grid>

            <Grid item xs={3}>
                <Name>Finished At:</Name>
            </Grid>
            <Grid item xs={9}>{format(report.finishedAt, 'MM/dd/yyyy')}</Grid>

            {(report.findings && report.findings.length>0) && <>
                <Grid item xs={12} md={3}>
                    <Name>Finding:</Name>
                </Grid>
                <Grid item xs={12} md={9}>
                    {report.findings.map((item, i)=> <FindingItem
                        item={item}
                        key={i}
                    />)}
                </Grid>
            </>}
        </Grid>}
    </Wrapper>
};
export default ReportPage

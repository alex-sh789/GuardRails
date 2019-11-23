import React from 'react';
import Grid from "@material-ui/core/Grid";
import Name from '../components/Name'
const Bold = props => <span style={{fontWeight: 'bold'}}>{props.children}</span>;

const FindingItem = props =>
    <Grid container spacing={3}
          style={{borderBottom: '1px solid #ccc'}}>
        <Grid item xs={12} md={6}>
            <Bold>Type:</Bold> {props.item.type}
        </Grid>
        <Grid item xs={12}>
            <Bold>Rule Id:</Bold> {props.item.ruleId}
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Name>Location</Name>
                </Grid>
                <Grid item xs={12}>
                    <Bold>Path:</Bold> {props.item.location.path}
                </Grid>
                <Grid item xs={12}>
                    <Bold>Positions Begin Line:</Bold> {props.item.location.positions.begin.line}
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Name>Metadata</Name>
                </Grid>
                <Grid item xs={12}>
                    <Bold>Description:</Bold> {props.item.metadata.description}
                </Grid>
                <Grid item xs={12}>
                    <Bold>Severity:</Bold> {props.item.metadata.severity}
                </Grid>
            </Grid>
        </Grid>
    </Grid>;

export default FindingItem
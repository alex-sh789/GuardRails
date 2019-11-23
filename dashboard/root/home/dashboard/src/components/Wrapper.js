import React from 'react'
import {makeStyles, Paper} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop: '5vh',
        marginBottom: '5vh'
    },
}));
const Wrapper = props => {
    const classes = useStyles();
    return <Paper className={classes.root}>{props.children}</Paper>
};
export default Wrapper

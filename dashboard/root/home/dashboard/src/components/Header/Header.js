import React from "react";
import {NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';

const useStyles = makeStyles(theme => ({
    title: {
        marginRight: 10
    },
}));

const Header = props =>{
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6"className={classes.title}>
                    <NavLink className='nav-link' to='/'>Create Report</NavLink>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    <NavLink className='nav-link' to='/reports'>Reports List</NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
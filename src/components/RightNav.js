import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FilterIcon from '@material-ui/icons/Filter';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "left",
        height: "100%",
        color: theme.palette.text.secondary,
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.text.secondary,
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },
    btmBtn:{
        position: "absolute",
        bottom: "6%"
    }
}));

//Right hand Side navigation menu, converts to bottom nevigation in mobile screen
export default function NavComponent() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <SearchIcon />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <FilterIcon />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <ImportExportIcon />
            </IconButton>
            <IconButton className = {classes.btmBtn} aria-label="show 4 new mails" color="primary">
                <ArrowBackIosIcon />
            </IconButton>
        </Paper>
    );
}

import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NavComponent from "../../components/NavComponent";
import RightNav from "../../components/RightNav";
import JobsComponent from "../../components/JobComponent";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/Filter";
import ImportExportIcon from "@material-ui/icons/ImportExport";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        width: "100vw",
        height: "85.5vh"
    },
    item0: {
        width: "20%",
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "unset"
        }
    },
    item1: {
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "75%"
        }
    },
    item2: {
        width: "5%",
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    bottomNav: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "30px",
        backgroundColor: "white",
        [theme.breakpoints.up("md")]: {
            display: "none"
        },

        position: "absolute",
        width: "100vw",
        bottom: "20px"
    },
    btn:{
        marginTop: "17px"
    }
}));

//Main Page component that the app shows. This encapsulates all the other components

const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
            {/* Header componet */}
            <Header />
            <div>
                {/* the main app and side nav components */}
                <Grid container className={classes.container}>
                    <Grid item className={classes.item0}>
                        <NavComponent />
                    </Grid>
                    <Grid item className={classes.item1}>
                        <JobsComponent />
                    </Grid>
                    <Grid item className={classes.item2}>
                        <RightNav />
                    </Grid>
                </Grid>
            </div>

            {/* Bottom Navigation component(same as right side navigation), only visible in mobile screen size at the bottom of screen */}
            <div className={classes.bottomNav}>
                <IconButton className={classes.btn} aria-label="show 4 new mails" color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton className={classes.btn} aria-label="show 4 new mails" color="inherit">
                    <FilterIcon />
                </IconButton>
                <IconButton className={classes.btn} aria-label="show 4 new mails" color="inherit">
                    <ImportExportIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default MainPage;

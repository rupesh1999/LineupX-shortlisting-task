import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import JobCard from "../components/JobCard";
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },
    hr: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    media: {
        height: 140
    },
    container: {
        height: "85.5vh",
        overflow: "scroll",
        overflowX: "hidden"
    }
}));

//This component encapsulates the whole job roll portion.
export default function JobComponent() {

    //using redux store to get the dummy jobs data
    const data = useSelector(state => state.jobs);
    const classes = useStyles();
    return (
        // mapping over the jobs array and creating a job card for eact job posting
        <Grid
            style={{ marginLeft: "0px", marginTop: "5px" }}
            className={classes.container}
            container
            spacing={2}
            justify={"flex-start"}
            xs={12}
        >
            {data.map(item => (
                <Grid item xs={12} md={4}>
                    <JobCard data={item} />
                </Grid>
            ))}
        </Grid>
    );
}

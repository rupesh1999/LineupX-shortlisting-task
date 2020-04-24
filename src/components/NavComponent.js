import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import HelpIcon from '@material-ui/icons/Help';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FeedbackIcon from '@material-ui/icons/Feedback';

const useStyles = makeStyles(theme => ({
    paper: {
        // display: "none",
        padding: theme.spacing(2),
        textAlign: "left",
        height: "100%",
        color: theme.palette.text.secondary
        // [theme.breakpoints.up("md")]: {
        //     display: "unset"
        // }
    },
    title: {
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
    },
    hr: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    container: {
        display: "flex",
        alignItems: "center"
    }
}));

//Left hand side navigation menu
export default function NavComponent() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <CardActionArea>
                <div className={classes.container}>
                    <DashboardIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Dashboard
                    </Typography>
                </div>
            </CardActionArea>
            <CardActionArea>
                <div className={classes.container}>
                    <PeopleIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Candidates
                    </Typography>
                </div>
            </CardActionArea>
            <hr className={classes.hr} />
            <CardActionArea>
                <div className={classes.container}>
                    <WorkIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Live Jobs
                    </Typography>
                </div>
            </CardActionArea>
            <CardActionArea>
                <div className={classes.container}>
                    <WorkOutlineIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Accepted Jobs
                    </Typography>
                </div>
            </CardActionArea>
            <CardActionArea>
                <div className={classes.container}>
                    <WorkOffIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Rejected Jobs
                    </Typography>
                </div>
            </CardActionArea>
            <hr className={classes.hr} />
            <CardActionArea>
                <div className={classes.container}>
                    <HelpIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        help Desk
                    </Typography>
                </div>
            </CardActionArea>
            <CardActionArea>
                <div className={classes.container}>
                    <YouTubeIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Tutorial
                    </Typography>
                </div>
            </CardActionArea>
            <CardActionArea>
                <div className={classes.container}>
                    <FeedbackIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Feedback
                    </Typography>
                </div>
            </CardActionArea>
        </Paper>
    );
}

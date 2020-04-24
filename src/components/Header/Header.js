import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import GroupIcon from "@material-ui/icons/Group";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    title1: {
        marginTop: 8
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    }
}));

//Header component of the app
export default function Header() {
    const classes = useStyles();

    //extracting username from redux store.
    const userName = useSelector(state => state.userName);
    
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        LOGO
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="secondary">
                                <GroupIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <AccountCircleIcon />
                        </IconButton>
                        <Typography
                            className={classes.title1}
                            variant="h6"
                            noWrap
                        >
                            | &nbsp; {userName}
                        </Typography>

                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

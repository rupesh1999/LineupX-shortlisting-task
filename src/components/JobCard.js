import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//card imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//Icons imports
import CreditCardIcon from "@material-ui/icons/CreditCard";
import WorkIcon from "@material-ui/icons/Work";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";

//Modal imports
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//Dropdown imports
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useState } from "react";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "390px",
    },
    hr: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    media: {
        height: 140
    },
    rejected: {
        marginTop: "10px",
        color: "red",
        fontSize: "15px",
        fontWeight: 600,
        textAlign: "center"
    },
    selected:{
        marginTop: "10px",
        color: "green",
        fontSize: "15px",
        fontWeight: 600,
        textAlign: "center"
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "70px",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    modalContainer:{
        display: "flex",
        justifyContent: "space-between"
    },
    modalBtn:{
        height: "35px",
        marginTop: "20px"
    }
}));

//Card comopnent that shows the job. Uses React Transition Groups behind the scenes for animation.
export default function JobCard(props) {
    //getting data passed from props
    const { data } = props;
    //local states for managing UI components
    const [isRejected, setIsRejected] = useState(false);

    const [open, setOpen] = useState(false);

    const [isSelected, setIsSelected] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSelected = () => {
        handleClose();
        setIsSelected(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const [age, setAge] = React.useState("");

    const handleChange = event => {
        setAge(event.target.value);
    };

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {data.jobTitle}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {data.companyName}, {data.department}, {data.location}
                    </Typography>
                    <hr className={classes.hr} />
                    <Grid container xs={12}>
                        <Grid style={{ display: "flex" }} item xs={6}>
                            <CreditCardIcon />
                            <Typography
                                style={{
                                    width: "fit-content",
                                    marginTop: "2px",
                                    marginLeft: "5px"
                                }}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {data.jobId}
                            </Typography>
                        </Grid>
                        <Grid style={{ display: "flex" }} item xs={6}>
                            <WorkIcon />
                            <Typography
                                style={{
                                    width: "fit-content",
                                    marginTop: "2px",
                                    marginLeft: "5px"
                                }}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {data.experienceReq} Years
                            </Typography>
                        </Grid>
                        <Grid style={{ display: "flex" }} item xs={6}>
                            <CalendarTodayIcon />
                            <Typography
                                style={{
                                    width: "fit-content",
                                    marginTop: "2px",
                                    marginLeft: "5px"
                                }}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {data.jobType}
                            </Typography>
                        </Grid>
                    </Grid>
                    <hr />

                    <Grid container justify="space-between" xs={12}>
                        <Grid style={{ display: "flex" }} item xs={6}>
                            <PersonIcon />
                            <Typography
                                style={{
                                    width: "fit-content",
                                    marginTop: "2px",
                                    marginLeft: "5px"
                                }}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {data.noOfCandidates} Candidates
                            </Typography>
                        </Grid>
                        <Grid style={{ display: "flex" }} item xs={6}>
                            <LocalAtmIcon />
                            <Typography
                                style={{
                                    width: "fit-content",
                                    marginTop: "2px",
                                    marginLeft: "5px"
                                }}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {data.salary} Lacks
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            {isRejected ? (
                <Typography
                    className={classes.rejected}
                    color="textSecondary"
                    component="p"
                >
                    Rejected
                </Typography>
            ) : ( isSelected ? (
                <Typography
                    className={classes.selected}
                    color="textSecondary"
                    component="p"
                >
                    Candidate Selected
                </Typography>
            ) : (
                <CardActions>
                    <Button size="small" color="primary" onClick={handleOpen}>
                        Accept
                    </Button>
                    <Button
                        onClick={() => setIsRejected(true)}
                        size="small"
                        color="primary"
                    >
                        Reject
                    </Button>
                </CardActions>
            )
            )}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{data.jobTitle}</h2>
                        <div className={classes.modalContainer}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">
                                    Candidate
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Rupesh Mishra"}>
                                        Rupesh Mishra
                                    </MenuItem>
                                    <MenuItem value={"Abhishek Pandey"}>
                                        Abhishek Pandey
                                    </MenuItem>
                                    <MenuItem value={"shivam Chowdahry"}>
                                        shivam Chowdahry
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <Button className={classes.modalBtn} onClick={() => handleSelected()} color="primary">ADD</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </Card>
    );
}

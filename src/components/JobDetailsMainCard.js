import {Button, Card, CardContent, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Typography from '@material-ui/core/Typography';

import deepPurple from "@material-ui/core/colors/deepPurple";

const useStyles = makeStyles((theme) => ({


    avt: {
        // transform: "translateY(-90%)",

        backgroundColor: deepPurple[500],
        borderRadius: 0
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    bgColor: {backgroundColor: theme.palette.primary.dark},
    btnColor: {
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF",
    },

}))

function JobDetailsMainCard(props) {


    const {title, description, location, createdAt, type} = props;
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            < Card className={classes.bgColor}>
                <CardContent>
                    <Grid container={12} justify="center" alignItems="center">
                        <Grid item xs={6}>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {createdAt}{type}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button className={classes.btnColor}>Apply now</Button>
                        </Grid>
                    </Grid>
                    <Typography variant="body1" color="textPrimary" component="p">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>


            </Card>
        </Grid>

    )
}

export default JobDetailsMainCard;

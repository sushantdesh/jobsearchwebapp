import {Card, CardContent, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    bgColor: {
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF"
    },
}));

function JobDetailsHowToApplyCard(props) {


    const {howToApply} = props;
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Card className={classes.bgColor}>
                <CardContent>

                    <Typography variant="body1" color="inherit" component="p">
                        {howToApply}
                    </Typography>

                </CardContent>


            </Card>
        </Grid>

    )
}

export default JobDetailsHowToApplyCard;

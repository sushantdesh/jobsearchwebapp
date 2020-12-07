import {Avatar, Button, Card, CardHeader, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

import deepPurple from "@material-ui/core/colors/deepPurple";

const useStyles = makeStyles((theme) => ({
    mycard: {
        // overflow:"visible",
        transform: "translateY(-50%)",
        backgroundColor: theme.palette.primary.dark
    },

    avt: {
        // transform: "translateY(-90%)",

        backgroundColor: deepPurple[500],
        borderRadius: 0
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

}))

function JobDetailsHeadCard(props) {
    const classes = useStyles()

    const {company, companyURL, logo} = props;

    return (
        <Grid item xs={12}>
            < Card className={classes.mycard}>

                <CardHeader
                    avatar={
                        <Avatar src={logo} alt={company} className={classes.large}>
                        </Avatar>
                    }
                    action={
                        <Button onClick={() => window.location.href = companyURL}>
                            Company
                        </Button>
                    }

                    title={company}
                    subheader={company}

                />

            </Card>
        </Grid>

    )
}

export default JobDetailsHeadCard;

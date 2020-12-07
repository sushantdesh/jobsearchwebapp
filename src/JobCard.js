import {Grid, Card, CardContent, Avatar, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Typography from '@material-ui/core/Typography';

import deepPurple from "@material-ui/core/colors/deepPurple";

const useStyles = makeStyles({
    mycard:{
        overflow:"visible"
    },

    avt: {
        transform: "translateY(-90%)",

        backgroundColor: deepPurple[500],
        borderRadius:12


    },

})

function JobCard(props) {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={4}>
            < Card className={classes.mycard}>



                <CardContent >
                    <Avatar variant="square" className={classes.avt} alt="No Img"
                            src={"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2lSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5c099f86472dd17b69407087f86e65fc32569b00/Copy%20of%20logo-7chord_symbol_trans-02.png"}>
                    </Avatar>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Hello, company name and stuff
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        location
                    </Typography>

                </CardContent>
            </Card>
        </Grid>

    )
}

export default JobCard;
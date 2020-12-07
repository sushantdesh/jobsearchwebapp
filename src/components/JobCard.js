import {Avatar, Card, CardActionArea, CardContent, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment'

import deepPurple from "@material-ui/core/colors/deepPurple";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    mycard: {
        overflow: "visible",
        height: "100%",
        backgroundColor: theme.palette.primary.dark
    },

    avt: {
        transform: "translateY(-90%)",

        backgroundColor: deepPurple[500],
        borderRadius: 12


    },

}))

function JobCard(props) {
    const classes = useStyles()
    const {id, type, url, created_at, company, company_url, title, company_logo, location} = props;

    return (
        <Grid item xs={12} sm={4} className="card-grid">
            < Card className={classes.mycard}>
                <CardActionArea component={Link} to={`/JobDetails/${id}`}>
                    <CardContent>
                        <Avatar variant="square" className={classes.avt} alt={company}
                                src={company_logo}>
                        </Avatar>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Moment fromNow>{created_at}</Moment> • {type}
                        </Typography>
                        <Typography variant="h6" color="textPrimary" component="p">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {company}
                        </Typography>
                        <Typography variant="body1" color="Blue" component="p">
                            {location}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
        </Grid>

    )
}

export default JobCard;
import React, {useEffect} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {itemDetailsFetchData} from "../redux/actions/actions";
import {Grid, LinearProgress} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";
import JobDetailsHeadCard from "./JobDetailsHeadCard";
import JobDetailsMainCard from "./JobDetailsMainCard";
import JobDetailsHowToApplyCard from "./JobDetailsHowToApplyCard";

const useStyles = makeStyles((theme) => ({

    progress: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    mainContainer: {

        // paddingTop: "10px",
        paddingRight: '20%',
        width: "100%",
        paddingLeft: '20%',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '10%',
            paddingLeft: '10%'
        }
    },
    mainContainerBackgroud: {
        backgroundColor: theme.palette.secondary.dark, height: "100%"
    }

}));

function JobDetails(match) {
    const classes = useStyles()
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(itemDetailsFetchData(
            `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${match.match.params.id}.json?markdown=true`
        ))
    }, [])
    const isloading = useSelector(state =>
        state.itemDetailsIsLoading
    )
    const haserrored = useSelector(state =>
        state.itemDetailsHasErrored
    )
    const details = useSelector(state => state.details)


    return (
        <div className={classes.mainContainerBackgroud}>
            <Header/>
            <Grid container spacing={1} className={classes.mainContainer}>
                {isloading && <Grid item xs={12}><LinearProgress/> </Grid>
                }
                {haserrored &&
                <Grid item xs={12}>

                    <Alert className={classes.progress} severity="error">
                        <AlertTitle>API Call Error </AlertTitle>
                        <strong> Heroku is routing the API call to circumvent the no cors policy of github api, this
                            might be the
                            issue with heroku, try again in some time!</strong>
                    </Alert>
                </Grid>
                }


                {!isloading && !haserrored &&
                <>
                    <JobDetailsHeadCard company={details.company} companyURL={details.company_url}
                                        logo={details.company_logo}/>
                    {/*<JobDetailsMainCard company={details.company} companyURL={details.company_url} logo={details.company_logo}/>*/}
                    <JobDetailsMainCard title={details.title} description={details.description}
                                        location={details.location}
                                        createdAt={details.created_at} type={details.type}/>
                    <JobDetailsHowToApplyCard howToApply={details.how_to_apply}/>

                </>


                }
            </Grid>
        </div>

    )

}

export default JobDetails;
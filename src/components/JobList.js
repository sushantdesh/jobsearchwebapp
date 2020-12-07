import { Grid, Paper, Button, Typography, LinearProgress} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {itemsFetchData, paginationItemsFetchData} from '../redux/actions/actions'
import {Alert, AlertTitle} from '@material-ui/lab';
import Filter from "./Filter";
import Header from "./Header";
import JobCard from "./JobCard";
import {usePosition} from 'use-position';


const useStyles = makeStyles((theme) => ({
    mainContainer: {

        // paddingTop: "10px"
        // ,
        backgroundColor: theme.palette.secondary.dark,
        width: "100%",
        paddingRight: '20%',
        paddingLeft: '20%',

        [theme.breakpoints.down('sm')]: {
            paddingRight: '5%',
            paddingLeft: '5%'
        }
    },

    Filter: {
        transform: "translateY(-50%)"
    },
    progress: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    appbar: {
        borderBottomLeftRadius: "30%",
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            borderBottomLeftRadius: 0,
        }

    },
    mainContainerBackground: {
        // height:"100vh",
        // overflow:"auto",
        backgroundColor: theme.palette.secondary.dark
    }

}));


function JobList() {
    const [page, setPage] = useState(1);


    const dispatch = useDispatch();


    const {latitude, longitude, error, timestamp, accuracy} =
        usePosition(true, {enableHighAccuracy: true});

    const [location, setLocation] = useState({
        lat: null,
        long: null

    })

    useEffect(() => {
        setLocation({
            lat: latitude,
            long: longitude
        })
    }, [latitude, longitude])


    // const { latitude, longitude, error } = usePosition();
    // const latitude=37.3229978
    // const longitude= -122.0321823


    useEffect(() => {

        if (location.lat) {

            dispatch(itemsFetchData(
                `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=${latitude}&long=${longitude}`
            ))
        } else {

            dispatch(itemsFetchData(
                "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=&location="
            ))

        }
    }, [location])
    const currentUrl = useSelector(state => state.currentUrl)
    const loadMore = () => {

        setPage(page + 1)
        dispatch(paginationItemsFetchData(
            currentUrl + "&page=" + page
        ))

    }
    const isloading = useSelector(state =>
        state.itemsIsLoading
    )
    const haserrored = useSelector(state =>
        state.itemsHasErrored
    )
    const items = useSelector(state => state.items)

    const paginationislaoding = useSelector(state =>
        state.paginationItemsIsLoading
    )
    const paginationhaserrored = useSelector(state =>
        state.paginationItemsHasErrored
    )


    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyles();
    return (
        <div className={classes.mainContainerBackground} style={{height: "100vh"}}>

            <Header/>


            <Grid container spacing={4} className={classes.mainContainer}>


                <Grid item xs={12} style={{textAlign: "center"}} className={classes.Filter}>
                    <Paper>
                        <Filter/>

                    </Paper>
                </Grid>
                {
                    haserrored &&
                    <Alert className={classes.progress} severity="error">
                        <AlertTitle>API Call Error </AlertTitle>
                        <strong> Heroku is routing the API call to circumvent the no cors policy of github api, this
                            might be the
                            issue with heroku, try again!</strong>
                    </Alert>


                }
                {
                    isloading &&
                    <LinearProgress className={classes.progress}/>

                }
                {!haserrored && !isloading && items.length > 0 &&


                items.map((item) => {


                    return (
                        <JobCard key={item.id} id={item.id} type={item.type} url={item.url} created_at={item.created_at}
                                 company={item.company}
                                 company_url={item.company_url} title={item.title} company_logo={item.company_logo}
                                 location={item.location}
                        />
                    )
                })

                }
                {!items.length > 0 && !isloading && !haserrored && <Grid item xs={12} style={{textAlign: "center"}}>
                    <Typography>No Jobs at your location</Typography>

                </Grid>

                }

                {items.length > 0 && !paginationhaserrored && !paginationislaoding &&
                <Grid item xs={12} style={{textAlign: "center"}}>
                    {items.length % 50 === 0 ? <Button onClick={loadMore}>Load More</Button> :
                        <Typography>No More Jobs</Typography>}

                </Grid>
                }

                {paginationhaserrored &&
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Alert className={classes.progress} severity="error">
                        <AlertTitle>API Call Error </AlertTitle>
                        <strong> Pagination api call error</strong>
                    </Alert>
                </Grid>
                }

                {paginationislaoding &&
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <LinearProgress className={classes.progress}/>
                </Grid>
                }

            </Grid>


        </div>
    )

}

export default JobList;
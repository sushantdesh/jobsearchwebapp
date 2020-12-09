import {Button, Grid, LinearProgress, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemsFetchData, paginationItemsFetchData} from '../redux/actions/actions'
import {Alert, AlertTitle} from '@material-ui/lab';
import Filter from "./Filter";
import Header from "./Header";
import JobCard from "./JobCard";


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

    const [page, setPage] = useState(1); // pagination track



    const location = useSelector(state =>
        state.locationCors
    )    //getcors from store


    const dispatch = useDispatch();

    useEffect(() => {

        if (location.lat) { // if location details are present at the store
            dispatch(itemsFetchData(
                `https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions.json?lat=${location.lat}&long=${location.long}`
            ))
        } else if (location.lat === null) {


            dispatch(itemsFetchData( // if location details are NOT present at the store
                "https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions.json?description=&location="
            ))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.lat])


    const currentUrl = useSelector(state => state.currentUrl) // for pagination, I'm storing current url

    const loadMore = () => { // Pagination button event
        setPage(page + 1)
        dispatch(paginationItemsFetchData(
            currentUrl + "&page=" + page
        ))
    }

    // variables form store for conditional rendering
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
        //main div
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
                items.map((item) => { // Jobcard props
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
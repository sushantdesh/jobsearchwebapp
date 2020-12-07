import {AppBar, Grid, makeStyles, Switch, Typography} from "@material-ui/core";
import React from "react";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import {useDispatch} from "react-redux";
import {darkModeToggle} from "../redux/actions/actions";


const useStyle = makeStyles((theme) => (
    {
        appbar: {
            borderBottomLeftRadius: "50%",
            display: "flex",
            [theme.breakpoints.down('xs')]: {
                borderBottomLeftRadius: 0,
            }

        },
        title: {
            flexGrow: 1
        }
    }
))

function Header() {
    const classes = useStyle();
    const dispatch = useDispatch()
    const handleClick=()=>{
      dispatch(darkModeToggle())
    }

    return (
        <AppBar className={classes.appbar} position="static">

            <Typography style={{paddingLeft: "10%", paddingTop: "1%", flexGrow: 1}} variant="h6"
                        className={classes.title}>
                Dev Jobs
            </Typography>
            {/*</div>*/}
            <Grid container xs={12}>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={8}/>
                <Grid item xs={2}>
                    <WbSunnyIcon/>
                    <Switch onClick={handleClick}/>
                    <Brightness3Icon/>
                </Grid>
            </Grid>


        </AppBar>
    )
}

export default Header;
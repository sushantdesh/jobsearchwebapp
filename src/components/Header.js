import {AppBar, makeStyles, Switch, Typography, Paper, Toolbar, Box} from "@material-ui/core";
import React from "react";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import {useDispatch} from "react-redux";
import {darkModeToggle} from "../redux/actions/actions";


const useStyle = makeStyles((theme) => (
    {
        appbar: {
            borderBottomLeftRadius: "50%",
            minHeight:"100px",
            display: "flex",
            [theme.breakpoints.down('xs')]: {
                borderBottomLeftRadius: 0,
            }

        },
        title: {
            flexGrow: 1
        },
        paperb: {
            margin:"auto"
        },

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
            <Toolbar className={classes.darkMode}>
                <Box display='flex' flexGrow={1} >
                    {/*Left Side*/}
                    <Typography style={{paddingLeft: "10%", paddingTop: "1%", flexGrow: 1}} variant="h6"
                                className={classes.title}>
                        Dev Jobs
                    </Typography>

                </Box>
                {/* dark mode is on the right side */}
                <Paper className={classes.paperb}>
                    <WbSunnyIcon/>
                    <Switch onClick={handleClick}/>
                    <Brightness3Icon/>
                </Paper>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
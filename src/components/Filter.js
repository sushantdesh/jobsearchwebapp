import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {itemsFetchData} from "../redux/actions/actions";
// import {Field, Form, Formik} from 'formik';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/Add';
import {Button, Checkbox, FormControlLabel, IconButton, TextField} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function Filter() {
    const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
        bgColor: {
            backgroundColor: theme.palette.primary.dark
        },
        btnColor: {
            backgroundColor: theme.palette.primary.main,
            color: "#FFFFFF",
        },
        componentBgColor: {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.dark === "#F5F6F8" ? "#000000" : "#FFFFFF",
        },
        componentBgColorCollapsable: {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.dark === "#F5F6F8" ? "#000000" : "#FFFFFF",
            [theme.breakpoints.down('sm')]: {
                display: "none"
            }
        },
        iconButton: {
            display: "none",
            [theme.breakpoints.down('sm')]: {
                display: "inline"
            }
        }
    }));
    const classes = useStyles();
    const [desc, setDesc] = useState('');
    const [loc, setLoc] = useState('');
    const [fullTimeBool, setFullTimeBool] = useState(false)
    const [collapse, setCollapse] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions.json?description=" +
            desc.split(" ").join("+") + "&location=" + loc.split(" ").join("+")
            + "&full_time=" + fullTimeBool;
        // update store with new data
        dispatch(itemsFetchData(url))
        // empty the textfields
        setDesc("")
        setLoc("")
        setFullTimeBool(false)
    }
    const theme = useTheme()
    const handleFilter = () => {
        setCollapse(!collapse)

    }
    return (
        <div className={classes.bgColor}>
            <form data-testid="search_form"
                  onSubmit={handleSubmit}>
                <TextField data-textid="search_desc"
                           value={desc}
                           onInput={e => setDesc(e.target.value)}
                           placeholder="Filter by Description, Skills.."
                           InputProps={{
                               startAdornment: <SearchIcon/>
                           }}
                           className={classes.componentBgColor}
                />

                <TextField data-textid="search_loc"
                           value={loc}
                           onInput={e => setLoc(e.target.value)}
                           placeholder="location"
                           InputProps={{
                               startAdornment: <LocationOnIcon/>
                           }}
                           className={theme.breakpoints.down('sm') && collapse ? classes.componentBgColorCollapsable
                               : classes.componentBgColor}
                />
                {"  "}
                <FormControlLabel control={
                    <Checkbox data-textid="search_fulltime" checked={fullTimeBool}
                              onChange={e => setFullTimeBool(!fullTimeBool)}/>}
                                  label="Full-Time only"
                                  className={theme.breakpoints.down('sm') && collapse ? classes.componentBgColorCollapsable
                                      : classes.componentBgColor}/>

                <IconButton
                    onClick={handleFilter}
                    className={classes.iconButton}

                >{
                    collapse ? <AddIcon/> : <RemoveIcon/>
                }
                </IconButton>
                <Button type="submit" className={classes.btnColor}>Search</Button>
            </form>
        </div>
    )
}

export default Filter;
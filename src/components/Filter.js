import React from "react";
import {useDispatch} from "react-redux";
import {itemsFetchData} from "../redux/actions/actions";
import {Field, Form, Formik} from 'formik';
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search"
import LocationOnIcon from '@material-ui/icons/LocationOn';


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function Filter() {
    const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
        bgColor: {
            backgroundColor: theme.palette.primary.dark,
        },
        btnColor: {
            backgroundColor: theme.palette.primary.main,
            color: "#FFFFFF",
        },
        componentBgColor: {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.dark === "#F5F6F8" ? "#000000" : "#FFFFFF",
        },
    }));
    const classes = useStyles();


    return (
        <div className={classes.bgColor}>

            <Formik
                initialValues={{
                    desc: "",
                    loc: "",
                    ftime: false,

                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    // values=(JSON.stringify(values, "", 2));

                    const url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=" +
                        values.desc.split(" ").join("+") + "&location=" + values.loc.split(" ").join("+")
                        + "&full_time=" + values.ftime;

                    dispatch(itemsFetchData(url))
                }
                }
            >
                {({values}) => (
                    <Form>
                        <SearchIcon/>


                        <Field id="desc" name="desc" placeholder="Filter by description, skills..."
                               className={classes.componentBgColor}/>

                        <LocationOnIcon/>
                        <Field id="loc" name="loc" placeholder="location"
                               className={classes.componentBgColor}/>

                        <label>
                            <Field type="checkbox" name="ftime"
                                   className={classes.componentBgColor}/>
                            Full Time Roles only
                        </label>

                        <button type="submit"
                                className={classes.btnColor}>Search
                        </button>
                    </Form>
                )}
            </Formik>
        </div>

    )

}

export default Filter;
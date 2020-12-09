import {usePosition} from "use-position";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {locationCors} from "../redux/actions/actions";


function useLocation(){
    //getting Location
    const {latitude, longitude} =
        usePosition(true, {enableHighAccuracy: true});
    const dispatch=useDispatch();


    useEffect(() => {

        setTimeout(() => {
            // do something here 1 sec after current has changed
            dispatch(locationCors({lat:latitude, long:longitude}))
        }, 1000);

    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [latitude, longitude])


};
export default useLocation;

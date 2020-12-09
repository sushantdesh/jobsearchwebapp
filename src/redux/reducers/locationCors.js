export function locationCors(state = {lat:null, long:null}, action) {
    switch (action.type) {
        case 'SET_LOCATION_CORS':

            return action.cors
        default:
            return state;
    }
}

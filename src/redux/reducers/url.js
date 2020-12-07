export function currentUrl(state = "", action) {
    switch (action.type) {
        case 'CURRENT_URL':

            return action.url;
        default:
            return state;
    }
}
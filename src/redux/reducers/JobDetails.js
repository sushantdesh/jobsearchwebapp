export function itemDetailsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEM_DETAILS_HAS_ERRORED':
            return action.hasErroredDetail;
        default:
            return state;
    }
}
export function itemDetailsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEM_DETAILS_IS_LOADING':
            return action.isLoadingDetail;
        default:
            return state;
    }
}
export function details(state = [], action) {
    switch (action.type) {
        case 'ITEM_DETAILS_FETCH_DATA_SUCCESS':
            return action.details;
        default:
            return state;
    }
}
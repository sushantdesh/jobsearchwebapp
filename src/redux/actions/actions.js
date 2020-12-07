import {
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_HAS_ERRORED,
    ITEM_DETAILS_HAS_ERRORED,
    ITEM_DETAILS_IS_LOADING,
    ITEM_DETAILS_FETCH_DATA_SUCCESS,
    CURRENT_URL,
    PAGINATION_ITEMS_FETCH_DATA_SUCCESS,
    PAGINATION_ITEMS_HAS_ERRORED,
    PAGINATION_ITEMS_IS_LOADING,
    DARK_MODE_TOGGLE
}
    from './actionTypes'


export function itemsHasErrored(bool) {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}


//pagination api call
export function currentUrl(url) {
    return {
        type: CURRENT_URL,
        url
    };
}

export function itemsFetchData(url) {

    return (dispatch) => {
        dispatch(paginationItemsIsLoading(false));
        dispatch(paginationItemsHasErrored(false));
        dispatch(itemsIsLoading(true));
        dispatch(itemsHasErrored(false));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(currentUrl(url))
                dispatch(itemsFetchDataSuccess(items))
            })
            .catch(() => {
                dispatch(itemsHasErrored(true))
                dispatch(itemsIsLoading(false))
            });
    };
}


//pagination api call
export function paginationItemsHasErrored(bool) {
    return {
        type: PAGINATION_ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function paginationItemsIsLoading(bool) {
    return {
        type: PAGINATION_ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function paginationItemsFetchDataSuccess(items) {
    return {
        type: PAGINATION_ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}


export function paginationItemsFetchData(url) {

    return (dispatch) => {
        dispatch(itemDetailsIsLoading(false));
        dispatch(itemDetailsHasErrored(false));
        dispatch(paginationItemsIsLoading(true));
        dispatch(paginationItemsHasErrored(false));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(paginationItemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(paginationItemsFetchDataSuccess(items))
            })
            .catch(() => {
                dispatch(paginationItemsHasErrored(true))
                dispatch(paginationItemsIsLoading(false))
            });
    };
}

//JobDetails

export function itemDetailsHasErrored(bool) {
    return {
        type: ITEM_DETAILS_HAS_ERRORED,
        hasErroredDetail: bool
    };
}

export function itemDetailsIsLoading(bool) {
    return {
        type: ITEM_DETAILS_IS_LOADING,
        isLoadingDetail: bool
    };
}

export function itemDetailsFetchDataSuccess(details) {
    return {
        type: ITEM_DETAILS_FETCH_DATA_SUCCESS,
        details
    };
}

export function itemDetailsFetchData(url) {

    return (dispatch) => {

        dispatch(itemDetailsIsLoading(true));
        dispatch(itemDetailsHasErrored(false));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemDetailsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((details) => dispatch(itemDetailsFetchDataSuccess(details)))
            .catch(() => {
                dispatch(itemDetailsHasErrored(true))
                dispatch(itemDetailsIsLoading(false))
            });
    };
}

export function darkModeToggle(bool) {

    return {
        type: DARK_MODE_TOGGLE,
        isTrue: bool
    };
}
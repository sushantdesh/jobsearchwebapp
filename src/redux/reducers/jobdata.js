export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}


export function paginationItemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'PAGINATION_ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function paginationItemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'PAGINATION_ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {

    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            // console.log("fetch data success", action.items)
            return action.items;
        case 'PAGINATION_ITEMS_FETCH_DATA_SUCCESS':
            console.log("action type from reducer", [...state, ...action.items])
            return [...state, ...action.items]

        default:
            return state;
    }
}

import {items, itemsHasErrored, itemsIsLoading, paginationItemsIsLoading,paginationItemsHasErrored} from './jobdata'
import {currentUrl} from './url'
import {locationCors} from "./locationCors";
import{details,itemDetailsHasErrored,itemDetailsIsLoading} from './JobDetails'
import {darkModeToggle} from './mode'

import {combineReducers} from "redux";

export  default combineReducers({
    items,
    itemsIsLoading,
    itemsHasErrored,

    details,
    itemDetailsIsLoading,
    itemDetailsHasErrored,

    darkModeToggle,

    currentUrl,

    paginationItemsIsLoading,
    paginationItemsHasErrored,

    locationCors


})


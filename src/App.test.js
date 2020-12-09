// import { render, screen } from '@testing-library/react';
// import App from './App';
// //smoke test for some components
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/search/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import {fireEvent, render} from "@testing-library/react/";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import JobCard from "./components/JobCard";
import JobDetailsHeadCard from "./components/JobDetailsHeadCard";
import JobDetailsHowToApplyCard from "./components/JobDetailsHowToApplyCard";
import JobDetailsMainCard from "./components/JobDetailsMainCard";
import {Avatar, Card, CardContent, Grid} from "@material-ui/core";
// import {itemIsLoading} from './redux/actions'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

configure({adapter: new Adapter()});


describe('JobCard', () => {


    it('smoke test for job card', () => {
        const jobCardWrapper = shallow(<JobCard title=""/>);

        expect(jobCardWrapper).toBeDefined(); // Passes
        expect(jobCardWrapper).toHaveLength(1); // Passes
        expect(jobCardWrapper.find(Grid)).toHaveLength(1)
        expect(jobCardWrapper.find(Grid).find(Card)).toHaveLength(1)
        expect(jobCardWrapper.find(Grid).find(Card).find(CardContent)).toHaveLength(1)
        expect(jobCardWrapper.find(Grid).find(Card).find(Avatar)).toHaveLength(1)

    });
    const mockStore = configureMockStore([thunk]);
    // it ("tests for filter render",()=>{
    //   const store = mockStore({
    //     startup: { itemIsLoading:false, itemHasErrored:false, items:[]
    //
    //     }
    //   });
    //
    //   const {getByTestId}= shallow( <Provider store={store}><Filter/></Provider>)
    //   const descTextField=getByTestId("search_desc")
    //   const locTextField=getByTestId("search_loc")
    //   const fulltimeCheck=getByTestId("search_fulltime")
    //   const searchForm=getByTestId("search_form")
    //
    //   expect(descTextField).toBeInTheDocument();
    //   expect(locTextField).toBeInTheDocument();
    //   expect(fulltimeCheck).toBeInTheDocument();
    //   expect(searchForm).toBeInTheDocument();
    // })
    // it ("check if the search buttons clears textfields",()=>{
    //   const {getByTestId}= render(<Filter/>)
    //   const descTextField=getByTestId("search_desc")
    //   const locTextField=getByTestId("search_loc")
    //   const fulltimeCheck=getByTestId("search_fulltime")
    //   const searchForm=getByTestId("search_form")
    //
    //   expect(descTextField).toBeInTheDocument();
    //   expect(descTextField.props().value).toBe("")
    //   expect(locTextField).toBeInTheDocument();
    //   expect(fulltimeCheck).toBeInTheDocument();
    //   expect(searchForm).toBeInTheDocument();
    // })
});

describe('JobDetails Head Card', () => {
    it('render test for Header', () => {
        const component = shallow(<JobDetailsHeadCard/>);

        expect(component).toBeDefined(); // Passes
    });

    // it('Should not render if we do not want it to', () => {
    //   const component = shallow(<MyComponent />);
    //
    //   expect(component).not.toBeDefined(); // Does not pass, as component isn't undefined.
    // });
});

describe('JobDetailsHowToApply Card', () => {

    // it('smoke test for Filter', () => {
    //   const FilterWrapper = shallow(<Filter title="random" />);
    //
    //
    //   expect(FilterWrapper).toBeDefined(); // Passes
    //   expect(FilterWrapper).toHaveLength(1); // Passes
    //   expect(FilterWrapper.find('div')).toHaveLength(1)
    //   // expect(jobCardWrapper.find(Grid).find(Card)).toHaveLength(1)
    //   // expect(jobCardWrapper.find(Grid).find(Card).find(CardContent)).toHaveLength(1)
    //   // expect(jobCardWrapper.find(Grid).find(Card).find(Avatar)).toHaveLength(1)
    //
    // });
    it('render test for Card- jobdetails-how to apply', () => {
        const component = shallow(<JobDetailsHowToApplyCard/>);

        expect(component).toBeDefined();
    });

    // it('Should not render if we do not want it to', () => {
    //   const component = shallow(<MyComponent />);
    //
    //   expect(component).not.toBeDefined(); // Does not pass, as component isn't undefined.
    // });
});

describe('JobDetails Main card', () => {

    // it('smoke test for Filter', () => {
    //   const FilterWrapper = shallow(<Filter title="random" />);
    //
    //
    //   expect(FilterWrapper).toBeDefined(); // Passes
    //   expect(FilterWrapper).toHaveLength(1); // Passes
    //   expect(FilterWrapper.find('div')).toHaveLength(1)
    //   // expect(jobCardWrapper.find(Grid).find(Card)).toHaveLength(1)
    //   // expect(jobCardWrapper.find(Grid).find(Card).find(CardContent)).toHaveLength(1)
    //   // expect(jobCardWrapper.find(Grid).find(Card).find(Avatar)).toHaveLength(1)
    //
    // });
    it('render test for Card- main card', () => {
        const component = shallow(<JobDetailsMainCard/>);

        expect(component).toBeDefined();
    });
});

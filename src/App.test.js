// import { render, screen } from '@testing-library/react';
// import App from './App';
// //smoke test for some components
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/search/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import createMount from "@material-ui/core/test-utils";
import { mount, configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import JobCard from "./components/JobCard";
import JobDetailsHeadCard from "./components/JobDetailsHeadCard";
import JobDetails from "./components/JobDetails";
import {Grid, Card, CardContent, Avatar} from "@material-ui/core";
import Filter from './components/Filter'
configure({ adapter: new Adapter() });

describe('JobCard', () => {



  it('smoke test for job card', () => {
    const jobCardWrapper = shallow(<JobCard title="random" />);


    expect(jobCardWrapper).toBeDefined(); // Passes
    expect(jobCardWrapper).toHaveLength(1); // Passes
    expect(jobCardWrapper.find(Grid)).toHaveLength(1)
    expect(jobCardWrapper.find(Grid).find(Card)).toHaveLength(1)
    expect(jobCardWrapper.find(Grid).find(Card).find(CardContent)).toHaveLength(1)
    expect(jobCardWrapper.find(Grid).find(Card).find(Avatar)).toHaveLength(1)

  });
  it('smoke test for JobList', () => {
    const component = shallow(<JobDetailsHeadCard  />);

    expect(component).toBeDefined(); // Passes
  });

  // it('Should not render if we do not want it to', () => {
  //   const component = shallow(<MyComponent />);
  //
  //   expect(component).not.toBeDefined(); // Does not pass, as component isn't undefined.
  // });
});

describe('Filter', () => {



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
  it('smoke test for JobList', () => {
    const component = shallow(<JobDetailsHeadCard  />);

    expect(component).toBeDefined(); // Passes
  });

  // it('Should not render if we do not want it to', () => {
  //   const component = shallow(<MyComponent />);
  //
  //   expect(component).not.toBeDefined(); // Does not pass, as component isn't undefined.
  // });
});
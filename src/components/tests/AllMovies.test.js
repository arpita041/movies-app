import React from 'react';
import { render, screen } from '@testing-library/react';
import AllMovies from '../AllMovies';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
const axios = require('axios');
jest.mock('axios');
Enzyme.configure({ adapter: new Adapter() });

axios.get.mockResolvedValue({
    res:
    {}
});

axios.delete.mockResolvedValue({
  res:
  {}
});

test("header renders with correct text",()=>{
    const {getByTestId} =render(
      <BrowserRouter>
      <AllMovies />
  </BrowserRouter>
    );
    const headerEl= getByTestId("header");

    expect(headerEl.textContent).toBe("Movie Details")
}) ;


test('to check whether AllMovies component rendered',()=>{
    render(
      <BrowserRouter>
      <AllMovies />
  </BrowserRouter>
    )
})


  test('should take a snapshot of AllMovies ', () => {
    const { asFragment } = render(
      <BrowserRouter>
      <AllMovies />
  </BrowserRouter>
    )
    
    expect(asFragment(
       <BrowserRouter>
      <AllMovies />
  </BrowserRouter>)).toMatchSnapshot()
   })
import React from 'react';
import { render, screen } from '@testing-library/react';
import AllMovies from '../AllMovies';
import "@testing-library/jest-dom/extend-expect";
import NavBarrr from '../NavBarrr'
import { BrowserRouter } from 'react-router-dom';


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
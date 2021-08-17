import React from 'react';
import { render, screen } from '@testing-library/react';
import MyCarousel from '../MyCarousel';
import { BrowserRouter } from 'react-router-dom';



test('to check whether AllDirectors component rendered',()=>{
    render(
        <BrowserRouter>
        <MyCarousel />
    </BrowserRouter>);
    
})

// asFragment(<App />) matches toMatchSnapshot() (the matcher provided by jest-dom).
test('should take a snapshot', () => {
    const { asFragment } = render(
        <BrowserRouter>
        <MyCarousel />
    </BrowserRouter>);
    
    expect(asFragment(  
    <BrowserRouter>
        <AllDirectors />
    </BrowserRouter>)).toMatchSnapshot()
   })
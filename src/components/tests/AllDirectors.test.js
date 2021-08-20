import React from 'react';
import { render, screen } from '@testing-library/react';
import AllDirectors from '../AllDirectors';
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

test("header renders with correct text",()=>{
    const {getByTestId} =render(
    <BrowserRouter>
        <AllDirectors />
    </BrowserRouter>);
    const headerEl= getByTestId("header");

    expect(headerEl.textContent).toBe("Director Details")
}) 

test('to check whether AllDirectors component rendered',()=>{
    render(
        <BrowserRouter>
        <AllDirectors />
    </BrowserRouter>);
    
})

// asFragment(<App />) matches toMatchSnapshot() (the matcher provided by jest-dom).
test('should take a snapshot', () => {
    const { asFragment } = render(
        <BrowserRouter>
        <AllDirectors />
    </BrowserRouter>);
    
    expect(asFragment(  
    <BrowserRouter>
        <AllDirectors />
    </BrowserRouter>)).toMatchSnapshot()
   });


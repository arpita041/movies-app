import React from 'react';
import { render, screen } from '@testing-library/react';
import AllDirectors from '../AllDirectors';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

Enzyme.configure({ adapter: new Adapter() });


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


test('button should do the proper action', () =>
{
    const component = shallow(<AllDirectors/>);
    let btn = component.find('button');
    btn.simulate('click');
})
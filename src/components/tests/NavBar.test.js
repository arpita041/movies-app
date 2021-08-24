import React from 'react';
import { getByText, render, screen, fireEvent,act, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../NavBar';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

it('to check whether GridReact component rendered',()=>{
    render(<BrowserRouter>
        <NavBar/>
    </BrowserRouter>)
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import InputField from '../inputField';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });


it('to check whether the component rendered',()=>{
    render(<BrowserRouter>
        <InputField/>
    </BrowserRouter>)
})
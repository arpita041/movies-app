import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBarrr from '../NavBarrr';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


test('to check whether AllMovies component rendered',()=>{
    render(<BrowserRouter>
        <NavBarrr />
    </BrowserRouter>)
})



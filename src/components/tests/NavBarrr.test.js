import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBarrr from '../NavBarrr';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';




test('to check whether AllMovies component rendered',()=>{
    render(<BrowserRouter>
        <NavBarrr />
    </BrowserRouter>)
})
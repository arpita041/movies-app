import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

test('to check whether AllMovies component rendered',()=>{
    render(<BrowserRouter>
        <Home />
    </BrowserRouter>)
})
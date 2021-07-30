import React from 'react';
import { render, screen } from '@testing-library/react';
import DeleteMovie from '../DeleteMovie';
import { BrowserRouter } from 'react-router-dom';


test('to check whether DeleteMovie component rendered',()=>{
    render(<BrowserRouter>
        <DeleteMovie />
    </BrowserRouter>)
})
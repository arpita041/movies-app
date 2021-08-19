import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('to check whether App component rendered',()=>{
    render(
        <App />)
})

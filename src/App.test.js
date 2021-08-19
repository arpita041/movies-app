import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';

test('renders component', () => {
   render( <BrowserRouter>
    <App />
</BrowserRouter>);
});

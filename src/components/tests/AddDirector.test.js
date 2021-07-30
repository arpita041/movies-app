import React from 'react';
import { render, screen } from '@testing-library/react';
import AddDirector from '../AddDirector';
import { BrowserRouter } from 'react-router-dom';

test('to check whether AddDirector component rendered',()=>{
    render(<BrowserRouter>
        <AddDirector />
    </BrowserRouter>)
})

test("header renders with correct text",()=>{
    const {getByTestId} =render(
      <BrowserRouter>
      <AddDirector />
  </BrowserRouter>
    );
    const headerEl= getByTestId("header");

    expect(headerEl.textContent).toBe("Add Directors Details")
}) ;
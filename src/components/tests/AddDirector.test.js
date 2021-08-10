import React from 'react';
import { render, screen } from '@testing-library/react';
import AddDirector from '../AddDirector';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

const simulateChangeInput = (component, inputSelector, newValue) =>
{
    let input = component.find(inputSelector)
    input.simulate('change', {
        target :{ value: newValue},
    })
    return component.find(inputSelector)
}

it('to check whether AddDirector component rendered',()=>{
    render(<BrowserRouter>
        <AddDirector />
    </BrowserRouter>)
})

it("header renders with correct text",()=>{
    const {getByTestId} =render(
      <BrowserRouter>
      <AddDirector />
  </BrowserRouter>
    );
    const headerEl= getByTestId("header");

    expect(headerEl.textContent).toBe("Add Directors Details")
}) ;

it('Should capture gender correctly onChange', function(){

    const component = shallow(<AddDirector />);
 let genderInput=  simulateChangeInput(component,'#gender','female');
expect(genderInput.props().value).toBe('female');
});




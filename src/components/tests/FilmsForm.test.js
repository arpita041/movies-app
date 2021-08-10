import React from 'react';
import { render, screen } from '@testing-library/react';
import FilmsForm from '../FilmsForm';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
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

test('to check whether filmsform component rendered',()=>{
    render(<BrowserRouter>
        <FilmsForm />
    </BrowserRouter>)
});


it('Should capture movieName correctly onChange', function(){

    const component = shallow(<FilmsForm />);
 let nameInput=  simulateChangeInput(component,'#moviename','Random');
expect(nameInput.props().value).toBe('Random');
});


it('Should capture boxOfficeCollection correctly onChange', function(){

    const component = shallow(<FilmsForm />);
 let nameInput=  simulateChangeInput(component,'#boxOfficeCollection','414141');
expect(nameInput.props().value).toBe('414141');
});


it('Should capture rating correctly onChange', function(){

    const component = shallow(<FilmsForm />);
 let nameInput=  simulateChangeInput(component,'#rating','10');
expect(nameInput.props().value).toBe('10');
});


it('Should capture DirectorName correctly onChange', function(){

    const component = shallow(<FilmsForm />);
 let nameInput=  simulateChangeInput(component,'#directorName','Random');
expect(nameInput.props().value).toBe('Random');
});
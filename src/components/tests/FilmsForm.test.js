import React from 'react';
import { getByText, render, screen, fireEvent,act, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom';
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

const simulateBlurInput = (component, inputSelector, newName) =>
{
    let input = component.find(inputSelector)
    input.simulate('blur',{
        target :{ name:newName},
    } );
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

it('Should validate movieName correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({name:")*(&("});
 let nameInput=  simulateBlurInput(component,'#moviename','movieName');
expect(component.state().nameError).toBe('Please enter a valid name');
});

it('Should validate movieName correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({name:"valid name"});
 let nameInput=  simulateBlurInput(component,'#moviename','movieName');
expect(component.state().nameError).toBe('');
});

it('Should validate movieName correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({name:"    "});
 let nameInput=  simulateBlurInput(component,'#moviename','movieName');
expect(component.state().nameError).toBe('Please enter a valid name');
});



it('Should capture boxOfficeCollection correctly onChange', function(){

    const component = shallow(<FilmsForm />);
 let nameInput=  simulateChangeInput(component,'#boxOfficeCollection','414141');
expect(nameInput.props().value).toBe('414141');
});

it('Should validate boxOfficeCollection correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({boxOfficeCollection:"     "});
 let nameInput=  simulateBlurInput(component,'#boxOfficeCollection','boxOfficeCollection');
expect(component.state().boxOfficeError).toBe('Box Office Collection is required');
});

it('Should validate boxOfficeCollection correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({boxOfficeCollection:"4783256385"});
 let nameInput=  simulateBlurInput(component,'#boxOfficeCollection','boxOfficeCollection');
expect(component.state().boxOfficeError).toBe('');
});


it('Should capture rating correctly onChange', function(){

    const component = shallow(<FilmsForm />);
 let nameInput=  simulateChangeInput(component,'#rating','10');
expect(nameInput.props().value).toBe('10');
});

it('Should validate rating correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({rating:"787876876"});
 let nameInput=  simulateBlurInput(component,'#rating','rating');
expect(component.state().ratingError).toBe('Rating should range between 0 to 10');
});

it('Should validate rating correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({rating:"7"});
 let nameInput=  simulateBlurInput(component,'#rating','rating');
expect(component.state().ratingError).toBe('');
});


it('Should capture DirectorName correctly onChange', function(){

    const component = shallow(<FilmsForm />);
 let nameInput=  simulateChangeInput(component,'#directorName','Random');
expect(nameInput.props().value).toBe('Random');
});

it('Should validate rating correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({directorName:"787876876"});
 let nameInput=  simulateBlurInput(component,'#directorName','directorName');
expect(component.state().directorError).toBe('Please enter a valid name');
});


it('Should validate rating correctly onBlur', function(){

    const component = shallow(<FilmsForm />);
    component.setState({directorName:"Aditya Kashyap"});
 let nameInput=  simulateBlurInput(component,'#directorName','directorName');
expect(component.state().directorError).toBe('');
});

it('renders the submit button', () =>
{
    const {getByText} =  render(<BrowserRouter>
        <FilmsForm />
    </BrowserRouter>);
     expect(getByText('Add Film')).toBeInTheDocument();
})

import React from 'react';
import { render, screen } from '@testing-library/react';
import DeleteMovie from '../DeleteMovie';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });


it('to check whether DeleteMovie component rendered',()=>{
    render(<BrowserRouter>
        <DeleteMovie />
    </BrowserRouter>)
});


it('Should capture moviename correctly onChange', function(){

    const component = shallow(<DeleteMovie />);
    let input = component.find('input')
    input.simulate('change' , {
        target: {value:'Jack'}
    });
    expect(component.state().movieName).toEqual('Jack');

})

it('Should validate moviename correctly onBlur', function(){

    const component = shallow(<DeleteMovie />);
    let input = component.find('input');
    input.simulate('blur' , {
        target: {name:'movieName'}
    });
    expect(component.state().nameError).toEqual('Please enter a valid name');
});

it('Should validate moviename correctly onBlur', function(){

    const component = shallow(<DeleteMovie />);
    let input = component.find('input')
    input.simulate('change' , {
        target: {value:'Jack'}
    });
    input.simulate('blur' , {
        target: {name:"movieName"}
    });
    expect(component.state().nameError).toEqual('');
})

it('should do something on submit ', function()
{
    
    const component = shallow(<DeleteMovie/>);
   component.find('form').simulate('submit',{ preventDefault () {} });
   
});

it('should do something on submit ', function()
{
    
    const component = shallow(<DeleteMovie/>);
    component.setState({
       movieName:"valid",
       nameError:""
    })
   component.find('form').simulate('submit',{ preventDefault () {} });
   
});
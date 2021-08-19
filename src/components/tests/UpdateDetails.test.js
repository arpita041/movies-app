import React from 'react';
import { render, screen } from '@testing-library/react';
import UpdateDetails from '../UpdateDetails';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

const simulateChangeInput = (component, inputSelector, newValue, newName) =>
{
    let input = component.find(inputSelector)
    input.simulate('change', {
        target :{ value: newValue, name:newName},
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


it('to check whether the component rendered',()=>{
    render(<BrowserRouter>
        <UpdateDetails />
    </BrowserRouter>)
})


it('Should capture name correctly onChange', function(){

    const component = shallow(<UpdateDetails />);
 let Input=  simulateChangeInput(component,'#name','Aditya','name');
expect(Input.props().value).toBe('Aditya');
});

it('Should capture age correctly onChange', function(){

    const component = shallow(<UpdateDetails />);
 let Input=  simulateChangeInput(component,'#age','21','age');
expect(Input.props().value).toBe('21');
});

it('Should capture award count correctly onChange', function(){

    const component = shallow(<UpdateDetails />);
 let Input=  simulateChangeInput(component,'#awardCount','10','awardCount');
expect(Input.props().value).toBe('10');
});

it('should do the validation properly' , function(){

    const component = shallow(<UpdateDetails />);
simulateBlurInput(component,'#name','name');
simulateBlurInput(component,'#age','age');
simulateBlurInput(component,'#awardCount','awardCount');
expect(component.state().nameError).toBe('Please enter a valid name');
expect(component.state().ageError).toBe("Age should range between 18 to 80");
expect(component.state().awardError).toBe("Award count should be between 0 to 100");
});

it('should do the validation properly' , function(){

    const component = shallow(<UpdateDetails />);
    component.setState({
        name:'valid',
        age:'21',
        awardCount:"32"
    })
simulateBlurInput(component,'#name','name');
simulateBlurInput(component,'#age','age');
simulateBlurInput(component,'#awardCount','awardCount');
expect(component.state().nameError).toBe('');
expect(component.state().ageError).toBe("");
expect(component.state().awardError).toBe("");
});

it('should do something on submit ', function()
{
    
    const component = shallow(<UpdateDetails/>);
   component.find('form').simulate('submit',{ preventDefault () {} });
   
});

it('should do something on submit ', function()
{
    
    const component = shallow(<UpdateDetails/>);
    component.setState({
        name:'valid',
        age:'21',
        awardCount:"32"
    })
   component.find('form').simulate('submit',{ preventDefault () {} });
   
});
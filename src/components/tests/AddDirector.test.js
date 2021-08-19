import React from 'react';
import { render, screen } from '@testing-library/react';
import AddDirector from '../AddDirector';
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
 let genderInput=  simulateChangeInput(component,'#gender','female','gender');
expect(genderInput.props().value).toBe('female');
});

it('Should capture name correctly onChange', function(){

    const component = shallow(<AddDirector />);
 let Input=  simulateChangeInput(component,'#input-name','Aditya','name');
expect(Input.props().value).toBe('Aditya');
});

it('Should capture age correctly onChange', function(){

    const component = shallow(<AddDirector />);
 let Input=  simulateChangeInput(component,'#age','21','age');
expect(Input.props().value).toBe('21');
});

it('Should capture award count correctly onChange', function(){

    const component = shallow(<AddDirector />);
 let Input=  simulateChangeInput(component,'#awardCount','10','awardCount');
expect(Input.props().value).toBe('10');
});

it('should do the name validation properly' , function(){

    const component = shallow(<AddDirector />);
simulateBlurInput(component,'#input-name','name');
expect(component.state().nameError).toBe('Please enter a valid name');
});

it('should do the name validation properly' , function(){

    const component = shallow(<AddDirector />);
    component.setState({name:"     "})
simulateBlurInput(component,'#input-name','name');
expect(component.state().nameError).toBe('Please enter a valid name');
});

it('should do the name validation properly' , function(){

    const component = shallow(<AddDirector />);
    component.setState({name:'coreect name'});
simulateBlurInput(component,'#input-name','name');
expect(component.state().nameError).toBe('');
});

it('should do the gender validation properly', function()
{
    const component= shallow(<AddDirector />);
   component.setState({gender:"female"});
    simulateBlurInput(component,'#gender','gender');
    expect(component.state().genderError).toBe("");
});
it('should do the gender validation properly', function()
{
    const component= shallow(<AddDirector />);
    component.setState({gender:"f78hih"});
    simulateBlurInput(component,'#gender','gender');
    expect(component.state().genderError).toBe("Gender can be only male, female or other");
});

it('should do the gender validation properly', function()
{
    const component= shallow(<AddDirector />);
    component.setState({gender:"    "});
    simulateBlurInput(component,'#gender','gender');
    expect(component.state().genderError).toBe("Gender can be only male, female or other");
});
it('should do the age validation properly', function()
{
    const component= shallow(<AddDirector />);
    component.setState({age:'2189'});
   simulateBlurInput(component,'#age','age');
   expect(component.state().ageError).toBe("Age should range between 18 to 80");
});

it('should do the age validation properly', function()
{
    const component= shallow(<AddDirector />);
    component.setState({age:'21'});
   simulateBlurInput(component,'#age','age');
   expect(component.state().ageError).toBe("");
});

it('should do the award validation properly', function()
{
    const component= shallow(<AddDirector />);
    component.setState({awardCount:'22898080'}); 
   simulateBlurInput(component,'#awardCount','awardCount');
expect(component.state().awardCountError).toBe("Award count should be between 0 to 100");
});

it('should do the award validation properly', function()
{
    const component= shallow(<AddDirector />); 
    component.setState({awardCount:'22'});
   simulateBlurInput(component,'#awardCount','awardCount');
expect(component.state().awardCountError).toBe("");
});

it('should do something on submit ', function()
{
    
    const component = shallow(<AddDirector/>);
     component.find('form').simulate('submit',{ preventDefault () {} },component.state());
})

it('should do something on submit ', function()
{
    
    const component = shallow(<AddDirector/>);
    component.setState({
        name: "aditi",
        age: "21",
        gender: "female",
        awardCount: "32",
        nameError: "",
        ageError: "",
        genderError: "",
        awardCountError: "",
    })
 component.find('form').simulate('submit',{ preventDefault () {} },component.state());
});

it('should show the modal properly', function()
{
    const component= shallow(<AddDirector />); 
    component.setState({respo:'yes'});
});

it('when response is no', function()
{
    const component = shallow(<AddDirector/>);
    component.setState({respo:'no'});
})
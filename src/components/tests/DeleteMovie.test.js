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


// it("should create an entry in component state with the event value", () => {
//     // given
//     const component = shallow(<DeleteMovie />);
//     const form = component.find('input');
//     // when
//     form.props().onChange({target: {
//       movieName: 'myName',
//       value: 'myValue'
//     }});
//     // then
//     expect(component.state('input')).toEqual('myValue');
//   });


// it("should create an entry in component state with the event value", () => {
//     // given
//     const component = mount(<DeleteMovie />);
//     component.find('input').simulate('change', { target: { movieName: '1234567890!!!' } });
//     expect(component.state().movieName).to.equal("1234567890");

//   });
import React from 'react';
import { getByText, render, screen, fireEvent,act, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gridreact from '../Gridreact';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const axios = require('axios');
jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });

it('to check whether GridReact component rendered',()=>{
    render(<BrowserRouter>
        <Gridreact />
    </BrowserRouter>)
});

it('Ag Grid should rendered properly', ()=>
{
    const component = shallow(<Gridreact/>);
    const res ={
        data:{
            'name':'Aditi'
        }
    }
    const gridComp = component.find('AgGridReact');
   gridComp.simulate('RowDoubleClicked',res);
  expect(gridComp).toBeTruthy();  
});

it('Ag Grid should rendered properly', ()=>
{
    const component = shallow(<Gridreact/>);
const res ={
    data:{'name':'Aditi'},
    oldValue:'Adi',
    value:'Adi'
}
let a=1;
    const gridComp = component.find('AgGridReact');
   gridComp.simulate('CellEditingStopped',res,a);
   expect(gridComp).toBeTruthy();  
});

it('button should do something', ()=>
{
    const component = shallow(<Gridreact/>);
    let btn = component.find('button');
    btn.simulate('click');
})

it('button should do something', ()=>
{
    const component = shallow(<Gridreact apiValue="director"/>);
    axios.put.mockResolvedValue({
        res:
        {
            statusText:'OK'
        }
    })
    let btn = component.find('button');
    btn.simulate('click');
})

it('button should do something', ()=>
{
    const component = shallow(<Gridreact apiValue="movie"/>);
    let nameArray =[1,2,3,4,5];
    axios.put.mockResolvedValue({
        res:
        {
            statusText:'OK'
        }
    })
    let btn = component.find('button');
    btn.simulate('click',{nameArray});
})

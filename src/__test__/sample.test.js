const { default: filmsForm } = require('../components/filmsForm.js');

var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    expect = require('expect'),
    componentt=require('../components/filmsForm.js')

describe("render ho jaa",()=>{
    it("check element",()=>{
        var comp = TestUtils.renderIntoDocument(
            <filmsForm />
        );
        var h3=TestUtils.findRenderedDOMComponentWithTag(
            comp, 'h3'
         );
         expect(h1.getDOMNode().textContent)
   .toEqual("Add Movie Details");
    })
})


import {render,screen} from '@testing-library/react'
import filmsForm from '../src/components/filmsForm'
describe('hello world',function(){
    render(<filmsForm />)
    it('hello test ',function(){
        const ele=screen.getAllByTestId('test-1');
        expect(ele).toBeInTheDocument();
    });
})

describe('hello world',function(){
    it('hello test ',function(){

    });
});

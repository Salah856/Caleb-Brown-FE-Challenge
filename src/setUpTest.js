import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import ListCoins from './views/home';

import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { IsoTwoTone } from '@material-ui/icons';

Enzyme.configure({ adapter: new Adapter() }); 


describe('coins list', ()=> {

    let wrapper; 

    beforeEach(() =>{
        wrapper = shallow(<ListCoins/>)
    })

    afterEach(()=>{
        wrapper.unmount()
    })

    it('it should render without error', () => {
        shallow(<ListCoins/>)
    })

    
});


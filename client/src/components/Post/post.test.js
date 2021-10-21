import React from 'react'; 
import {render, screen} from '@testing-library/react'; 
import Post from './index';  

describe('Post Component', () => {
    test('Basic Rendering of Post component',()=>{
        render(<Post/>); 
        screen.debug();
    })
})



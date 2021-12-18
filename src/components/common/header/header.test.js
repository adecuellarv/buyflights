import React from 'react';
import { Link } from 'react-router';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';

test('Header Test', () => {
    const component = renderer.create(
        <Router>
            <Header />
        </Router>
        ,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
    const testInstance = component.root;
    const allLinks = testInstance.findAllByType('a');
    expect(allLinks.length).toBe(2)
    
});
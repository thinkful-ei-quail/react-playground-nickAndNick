import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import './Accordion.css';
import renderer from 'react-test-renderer';

describe(`Accordion Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion sections={[{title:'Section 1', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<Accordion sections={[{title:'Section 1', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}]}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();  
  });

})
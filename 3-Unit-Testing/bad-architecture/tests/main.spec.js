// import { setStatusClosed } from '../src/main';
import { JSDOM } from "jsdom"
// import {cleanup, fireEvent, render} from '@testing-library/react';

describe('Bad-architecture tests', () => {
  
  xit('Check fn setStatusClosed', () => {
    // console.log('1. запуск теста')
    const id = 'id1';
    // const dom = new JSDOM()
    // global.document = dom.window.document;
    // global.window = dom.window;
    // debugger
    // const element = document.createElement('div');
    // console.log('element', element)
    // const spyFunc = jest.fn();
    // Object.defineProperty(global.document, 'querySelector', element);
    const rendered = render(<div id={'issueInputForm'} />);
    debugger
    setStatusClosed(id);

    expect(spyFunc).toHaveBeenCalled();
  });

})
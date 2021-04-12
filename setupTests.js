import { JSDOM } from "jsdom"
// console.log('3. Запуск setupTests')
const dom = new JSDOM()
global.document = dom.window.document;
// console.log('document', global.document.innerHTML)
// global.document.createElement("div");
global.document.createElement('issueInputForm', { id: 'issueInputForm' });
// console.log('document', global.document.innerHTML)
global.window = dom.window

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
global.localStorage = localStorageMock;

Object.defineProperty(document, 'div', {
  value: document.createElement('issueInputForm', { id: 'issueInputForm' }),
});

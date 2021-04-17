//import { beforeAll, jest, expect } from '@jest/globals';
import { fetchIssues, deleteIssue } from '../src/main';

describe('fetchIssues function:', () => {
  const ID_1 = "060e3461-baa1-5c97-86f3-8983f85823f2";
  const ID_2 = "cb7de04c-7744-50e4-8a59-917efcd62196";
  const fakeData = [
    {
      id: ID_1,
      description: "sdfsdf",
      severity: "Medium",
      assignedTo: "23r",
      status: "Open"
    },
    {
      id: ID_2,
      description: "sdfa",
      severity: "Medium",
      assignedTo: "3333",
      status: "Open"
    }
  ];

  it('DOM renders correctly for non empty data', () => {

    expect.assertions(2);

    //1. "Загрузить" данные

    JSON.parse = jest.fn().mockReturnValue(fakeData);

    fetchIssues();

    //3. Проверить записанную разметку в "заглушку" элемента
    expect(document.getElementById.mock.results[0].value.innerHTML).toMatch(`<h6>Issue ID: ${ID_1}</h6>`)
    expect(document.getElementById.mock.results[0].value.innerHTML).toMatch(`<h6>Issue ID: ${ID_2}</h6>`)
  });

  it('DOM renders correctly for empty data', () => {
    expect.assertions(1);

    const fakeData = [];
    JSON.parse = jest.fn().mockReturnValue(fakeData);

    fetchIssues();

    expect(document.getElementById.mock.results[0].value.innerHTML).toEqual('');
  });

  it('DOM renders with not correct data', () => {
    expect.assertions(1);

    const fakeData = {
        id: "060e3461-baa1-5c97-86f3-8983f85823f2",
        description: "sdfsdf",
        severity: "Medium",
        assignedTo: "23r",
        status: "Open"
      }
    JSON.parse = jest.fn().mockReturnValue(fakeData);

    fetchIssues();

    expect(document.getElementById.mock.results[0].value.innerHTML).toMatch('');
  });

  it('DOM renders with error data', () => {
    expect.assertions(1);
    const errorMsg = 'Ошибка чтения данных!';
    // Можно замокать, конечно localStorage.getItem, но суть в том, что JSON.parse() выводит ошибку синтаксиса, если что-то не так.
    // Так что можно сразу райсить ошибку в нём и чекать что в коде её никто не обрабатывает. Профит.
    JSON.parse = jest.fn().mockImplementation(() => {throw new SyntaxError(errorMsg)});
    
    try {
      fetchIssues()
    }
    catch (e) {
      expect(e.message).toEqual(errorMsg);
    }
  });

  it('test DeleteIssue', () => {
    JSON.parse = jest.fn().mockReturnValue(fakeData);
    JSON.stringify = jest.fn();
    deleteIssue(ID_2);
    const settedItems = JSON.stringify.mock.calls[0][0];

    // Проверяем что среди устанавливаемых в localStorage элементов нет удаляемого
    expect(settedItems.length).toEqual(1);
    expect(settedItems).toContain(fakeData[0]);
    expect(settedItems).not.toContain(fakeData[1]);
  })
})

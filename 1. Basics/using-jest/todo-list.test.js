import TodoList from './todo-list.js';
import TodoItem from './todo-item.js';

test('Todo list can add item', () => {
  // Arrange
  let list = new TodoList();
  let itemName = 'test';
  const expectItem = new TodoItem(itemName);

  //Act
  list.addItem(itemName);

  //Assert
  expect(list.items[0]).toEqual(expectItem);
})
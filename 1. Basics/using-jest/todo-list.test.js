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

test('Todo list can check items', () => {
  // Arrange
  let list = new TodoList();
  list.addItem('Element 1');
  list.addItem('Element 2');
  const itemIndex = 1;

  // Act
  list.done(itemIndex);

  // Assert
  expect(list.items[itemIndex].isDone).toBe(true);
})
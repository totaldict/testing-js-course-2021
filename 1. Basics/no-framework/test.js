import TodoList from './todo-list.js';

function todoListCanAddItem() {
  // Arrange
  let list = new TodoList();
  let itemName = 'test';

  //Act
  list.addItem(itemName);

  //Assert
  if (!list.items.some((item) => item.name == itemName)) {
    throw 'todoListCanAddItem - ERROR';
  }
}

function todoListCanCheckItem() {
  // Arrange
  let list = new TodoList(['item1', 'item2']);
  let itemNumber = 1;

  //Act
  list.done(itemNumber);

  //Assert
  if (!list.items[itemNumber].isDone) {
    throw 'todoListCanCheckItem - ERROR';
  }
}

todoListCanAddItem();
todoListCanCheckItem();


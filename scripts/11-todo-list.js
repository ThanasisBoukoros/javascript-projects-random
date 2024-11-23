
const todoList = [


];

renderTodolist();
function renderTodolist() {
  let todoListHTML ='';

  for (let i=0; i < todoList.length; i++)
  {
  const todoObject = todoList[i];
  /*
  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  */
  const { name , dueDate} = todoObject;
  const html=`<div>${name} </div>
    <div>${dueDate}</div>
      <button onclick="
      todoList.splice(${i},1);
      renderTodolist();
    " class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
  todoListHTML += html;

  console.log(document.querySelectorAll('.js-delete-todo-button'));
  
  
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


document.querySelector('.js-add-todo-button')
.addEventListener('click',
  ()=>
  {
    addTodo();
  }
);

function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;
 
 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

 
todoList.push({name, dueDate});
console.log(todoList);

inputElement.value = '';

renderTodolist();
 
}

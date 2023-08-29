let form = document.querySelector('#form');
let input = document.querySelector('#task-input');
let filter = document.querySelector('#task-filter');
let ul = document.querySelector('#task-ul');
let btn = document.querySelector('.clear-btn');

// Event Listener
form.addEventListener('submit', addTask);
ul.addEventListener('click', removeTask); 
btn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);


// Functions
  // addTask
  function addTask(e){
    if(input.value === ''){
        alert("Please add a Task!");
    }else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value + ' '));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'Delete';
        li.appendChild(link);
        ul.appendChild(li);
        input.value = '';

    }
    e.preventDefault();
  }

  // remove task
  function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm('Are you sure?')){
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
  }

  // clear task function
  function clearTask(e){
    if(confirm("It will delete all you Tasks !!")){
        ul.innerHTML = '';

    }
  }

  // filter task function
  function filterTask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task =>{
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
  }


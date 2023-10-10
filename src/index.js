document.addEventListener("DOMContentLoaded", () => { 
  let form = document.querySelector('form');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildList(e.target.new_task_description.value, e.target.task_priority.value);
    form.reset();
  })
});

function buildList(list, priority) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = '  x  ';

  if ( priority == "[High]" ) {
    p.style.color = 'red';
    p.textContent = `${list} ${priority} `;
  } else if ( priority == "[Med]" ) {
    p.style.color = 'orange';
    p.textContent = `${list} ${priority} `;
  } else if ( priority == "[Low]") {
    p.style.color = 'green';
    p.textContent = `${list} ${priority} `;
  }
  p.textContent = `${list} ${priority} `;
  p.appendChild(btn)
  document.getElementById('tasks').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

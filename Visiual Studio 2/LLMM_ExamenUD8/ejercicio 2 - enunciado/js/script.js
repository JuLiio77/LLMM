
const input = document.querySelector('input');
const addBtn = document.querySelector('.add .btn');
const tasks = document.querySelector('.tasks');

    // Función para añadir una nueva tarea
    function addTask() {
        if (input.value !== '') {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `<p>${input.value}</p><span class="close">X</span>`;
        tasks.appendChild(task);
        input.value = '';
        task.querySelector('.close').addEventListener('click', () => {
            task.remove();
        });
        }
    }

    // Usamos el Event Listener para que el boton añada una nueva tarea
    addBtn.addEventListener('click', addTask);
    
    // Usamos el Event Listener para la tecla Enter en el input de texto
    input.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
        addTask();
        }
    
        if(!input){
        alert('Rellene el input para añadir una nueva tarea');
        return;
        }

    });


   


  
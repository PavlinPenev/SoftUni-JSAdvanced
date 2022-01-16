function solve() {

    document.getElementById('add').addEventListener('click', addTask);
    const taskNameInput = document.getElementById('task');
    const taskDescriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('date');

    const sections = document.getElementsByTagName('section');
    const openSection = sections[1].children[1];
    const inProgressSection = document.getElementById('in-progress');
    const completeSection = sections[3].children[1];

    function addTask(ev) {

        ev.preventDefault();

        if (taskNameInput.value && taskDescriptionInput.value && dueDateInput.value) {

            const articleElement = document.createElement('article');
            const h3Element = document.createElement('h3');
            h3Element.textContent = taskNameInput.value;
            articleElement.appendChild(h3Element);
            const pElementDescription = document.createElement('p');
            pElementDescription.textContent = `Description: ${taskDescriptionInput.value}`;
            articleElement.appendChild(pElementDescription);
            const pElementDueDate = document.createElement('p');
            pElementDueDate.textContent = `Due Date: ${dueDateInput.value}`;
            articleElement.appendChild(pElementDueDate);
            const divElement = document.createElement('div');
            divElement.classList.add('flex');
            const startButton = document.createElement('button');
            startButton.textContent = 'Start';
            startButton.classList.add('green');
            startButton.addEventListener('click', startTask);
            divElement.appendChild(startButton);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('red');
            deleteButton.addEventListener('click', deleteTask);
            divElement.appendChild(deleteButton);
            articleElement.appendChild(divElement);
            openSection.appendChild(articleElement);

        }

        taskNameInput.value = '';
        taskDescriptionInput.value = '';
        dueDateInput.value = '';

        function startTask(ev) {

            const article = ev.target.parentNode.parentNode;
            ev.target.remove();
            inProgressSection.appendChild(article);
            const finishButton = document.createElement('button');
            finishButton.textContent = 'Finish';
            finishButton.classList.add('orange');
            finishButton.addEventListener('click', finishTask);
            article.children[3].appendChild(finishButton);

        }

        function deleteTask(ev) {
            
            ev.target.parentNode.parentNode.remove();

        }

        function finishTask(ev) {

            const article = ev.target.parentNode.parentNode;
            completeSection.appendChild(article);
            article.children[3].remove();

        }
    }
}
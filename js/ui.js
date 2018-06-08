const UI = (function () {

    const ul = document.querySelector('.list-group');
    const emptyAlert = document.querySelector('.empty-alert');

    const listTemplate = function (task) {
        let li = document.createElement('li');
        //li.textContent = task.text;
        li.setAttribute('data-id', task.id);
        li.className = 'list-group-item d-flex align-items-center';
        // create span for item name
        let itemSpan = document.createElement('span');
        itemSpan.classList = 'taskName';
        itemSpan.textContent = task.text;

        // Create tag i fa-trash-alt
        let iDelete = document.createElement('i');
        iDelete.className = 'fas fa-trash-alt delete-item ml-2';
        // Create tag i fa-edit
        let iEdit = document.createElement('i');
        iEdit.className = 'fas fa-edit edit-item ml-auto';


        // Append delete and edit icons to li
        li.appendChild(itemSpan);
        li.appendChild(iEdit);
        li.appendChild(iDelete);

        return li;
    };

    const addTask = function (task) {
        ul.insertAdjacentElement('afterbegin', listTemplate(task));
    };

    const deleteTask = function (id) {
        const li = ul.querySelector(`[data-id="${id}"]`);
        li.remove();
    };

    const checkList = function () {
        if (!ul.children.length) {
            emptyAlert.style.display = 'block';
        } else {
            emptyAlert.style.display = 'none';
        }
    };

    const deleteAll = async function () {
        ul.innerHTML = '';
    };

    const getFocus = function (target) {
        let parent = target.closest('li');
        let item = parent.querySelector('.taskName');

        target.classList.toggle('fa-save');
        item.setAttribute('contenteditable', true);
        item.focus();
    };

    const editTask = async function (target) {
        let parent = target.closest('li');
        let itemId = parent.getAttribute('data-id');
        let item = parent.querySelector('.taskName');
        target.classList.toggle('fa-save');
        item.setAttribute('contenteditable', false);
        return {
            id: itemId,
            text: item.textContent
        }
    };

    return {
        addTask,
        deleteTask,
        checkList,
        deleteAll,
        editTask,
        getFocus
    }

}());
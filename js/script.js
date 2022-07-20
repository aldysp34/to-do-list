document.addEventListener('DOMContentLoaded', function () {

    const inputBukuForm = document.getElementById('inputBook');
    const searchBukuForm = document.getElementById('searchBook');
    const editBukuForm = document.getElementById('editBook');

    inputBukuForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();
    });

    searchBukuForm.addEventListener('submit', function (event) {
        event.preventDefault();
        searchBook();
    });
    
    editBukuForm.addEventListener('submit', function (event) {
        event.preventDefault();
        saveEditBook();
    });

    document.querySelector('.btn-cancel').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#modal-edit').style.display = 'none';
        document.body.classList.toggle('overflow');
    })

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

document.addEventListener('ondataloaded', () => {
    refreshDataFromBooks();
});
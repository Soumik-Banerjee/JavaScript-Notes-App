// FUNCTION TO DELETE ALL -->
let delDialogBox = document.getElementById('delete_dialog_box');
let delAllBtn = document.getElementById('deleteAll');
let delBtnYes = document.getElementById('delBtnYes');
let delBtnNo = document.getElementById('delBtnNo');

delAllBtn.addEventListener('click', function () {
    delDialogBox.style.top = '0';
    delBtnYes.addEventListener('click', function () {
        localStorage.setItem('database', '[]');
        displayNotes()
        delDialogBox.style.top = '-100vh';
    })
    delBtnNo.addEventListener('click', function () {
        delDialogBox.style.top = '-100vh';
    })
})


// NAVBAR MENU OPTIONS -->
let showMenuBtn = document.getElementById('showMenuBtn');
let navFeatures = document.getElementsByClassName('nav__features')[0];


let navVarX = true;

showMenuBtn.addEventListener('click', function () {
    if (navVarX == true) {
        navFeatures.style.opacity = '1';
        navFeatures.style.pointerEvents = 'inherit'
        navFeatures.style.top = '50px';
        navVarX = false;
    } else {
        navFeatures.style.top = '75px';
        navFeatures.style.opacity = '0';
        navFeatures.style.pointerEvents = 'none'
        navVarX = true;
    }

})

navFeatures.addEventListener('blur', function(){
    navFeatures.style.top = '75px';
        navFeatures.style.opacity = '0';
        navFeatures.style.pointerEvents = 'none';
})


// NOTES COLUMN FUNCTION -->
let columnBtn = document.getElementsByClassName('columnBtn');
let notes = document.getElementsByClassName('notes');

for (const element of columnBtn) {
    element.addEventListener('click', function(){
        for (const iterator of notes) {
            iterator.style.width = element.value;
            localStorage.setItem('notesWidth', element.value);
        }
    })
}


// Search Notes functionality -->
let searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', function () {
    let notes = document.getElementsByClassName('notes');
    let searchVal = searchBox.value.toLowerCase();
    for (const items of notes) {
        let noteHead = items.children[0].innerText;
        let noteBody = items.children[1].innerText;

        if (noteBody.includes(searchVal) || noteHead.includes(searchVal)) {
            items.style.display = 'block'
        } else {
            items.style.display = 'none'
        }
    }
})






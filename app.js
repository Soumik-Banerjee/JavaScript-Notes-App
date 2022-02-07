console.log('Welcome to Z-notes, a JavaScript notes application');
displayNotes()

const inpHead = document.getElementById('inpHead');
const inpDesc = document.getElementById('inpDesc');
const btn = document.getElementById('btn');

// Function to prevent for adding a Blank Note -->
function blankNoteAlert() {
    alert("You can not add a blank note!!")
}

//Function to add a note, It use localstorage to store the notes -->
btn.addEventListener('click', function () {
    if (inpHead.value == "" && inpDesc.value == "") {
        blankNoteAlert();
    }
    else {
        let database = localStorage.getItem('database');
        if (database == null) {
            database = [];
        } else {
            database = JSON.parse(database);
        }
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let obj = {
            'head': inpHead.value,
            'desc': inpDesc.value,
            'date': `${day}/${month}/${year}`
        };
        database.unshift(obj);
        localStorage.setItem('database', JSON.stringify(database));

        inpHead.value = '';
        inpDesc.value = '';
        displayNotes();
    }
})


//Function to desplay notes -->
function displayNotes() {
    let database = localStorage.getItem('database');
    if (database == null) {
        databaseArr = [];
    } else {
        databaseArr = JSON.parse(database);
    }

    let html = '';

    databaseArr.forEach(function (obj, index) {
        html += `
            <div class="notes">
                <h4 class="notes__heading"><span class="note__number">${index + 1}</span>${obj.head}</h4>
                <div class="notes__description">${obj.desc}</div>
                <div class="date-delete-container">
                <button id="${index}" onclick="deleteNote(this.id)">Delete</button>
                    <div class="date-container">${obj.date}</div>
                </div>
            </div>
        `
    });

    let notesCont = document.getElementById('notesCont');
    if (databaseArr.length != 0) {
        notesCont.innerHTML = html;
    } else {
        notesCont.innerHTML = 'Nothing to show you! Use "Add Note" button to add a note.'
    }

    let notes = document.getElementsByClassName('notes');
    for (let i = 0; i < notes.length; i++) {
        notes[i].style.width = localStorage.getItem('notesWidth');
    }
}


//deleting single notes functionality -->
function deleteNote(index) {
    let database = localStorage.getItem('database');
    if (database == null) {
        databaseArr = [];
    } else {
        databaseArr = JSON.parse(database);
    }
    databaseArr.splice(index, 1);
    localStorage.setItem('database', JSON.stringify(databaseArr));
    displayNotes()
}
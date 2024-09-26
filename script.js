const journalForm = document.getElementById('journalForm');
const journalEntry = document.getElementById('journalEntry');
const entriesContainer = document.getElementById('entriesContainer');

// loads existing entries from local storage
const loadEntries = () => {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.forEach(entry => {
        displayEntry(entry);
    });
};

// displays the journl entry
const displayEntry = (entry) => {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');
    entryDiv.textContent = entry;
    entriesContainer.appendChild(entryDiv);
};

// adds a new entry
journalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newEntry = journalEntry.value;

    // saves it to local storage
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.push(newEntry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));

    // display the new entry
    displayEntry(newEntry);
    journalEntry.value = '';
});

// load entries on page load
window.onload = loadEntries;
 
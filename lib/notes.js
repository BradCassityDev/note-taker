const fs = require('fs');
const path = require('path');

// Return note by ID
function findNoteById(note) {

}

// Create new note
function createNote(note, notes) {
    const noteId = Math.floor(Date.now() / 1000);
    note.id = noteId;

    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return note;
}

// Delete note by ID
function deleteNoteById(note) {
    
}

module.exports = {
    findNoteById,
    createNote,
    deleteNoteById
}
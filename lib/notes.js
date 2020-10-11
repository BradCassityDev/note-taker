const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

// Create new note
function createNote(note, notes) {
    const noteId = uniqid();
    note.id = noteId;

    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return note;
}

// Delete note by ID
function deleteNoteById(note, notes) {
    // Filter our note with the corresponding noteId
    const result = notes.filter(n => n.id !== note);
    console.log(result);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(result, null, 2)
    );

    return result;
}

module.exports = {
    createNote,
    deleteNoteById
}
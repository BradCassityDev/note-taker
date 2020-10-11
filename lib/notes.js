const fs = require('fs');
const path = require('path');

// Return note by ID
function findNoteById(note) {

}

// Create new note
function createNote(note) {
    const noteId = new Date();
    console.log(note);
    console.log(noteId);
    note.id = new Date();
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
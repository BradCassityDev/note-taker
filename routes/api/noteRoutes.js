const router = require('express').Router();
let notesArray = require('../../db/db.json');
const { createNote, deleteNoteById } = require('../../lib/notes');

// Return Notes
router.get('/notes', (req, res) => {
    res.send(notesArray.notes);
});

// Post a new note
router.post('/notes', (req, res) => {
    const newNote = createNote(req.body, notesArray.notes);
    res.send(newNote);
});

// Delete Note
router.delete('/notes/:id', (req, res) => {
    let noteId = req.params.id;
    const result = deleteNoteById(noteId, notesArray.notes);

    delete require.cache[require.resolve('../../db/db.json')];
    notesArray = require('../../db/db.json');
    
    if (result) {
        res.send(notesArray);
    } else {
        res.send(404);
    }
});

module.exports = router;
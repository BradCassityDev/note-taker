const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNote, deleteNoteById} = require('../../lib/notes');

// Return Notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Post a new note
router.post('/notes', (req, res) => {
    const newNote = createNote(req.body, notes);
    res.send(newNote);
});

// Delete Note
router.delete('/notes/:id', (req, res) => {

    const result = deleteNoteById(req.params.id, notes);

    if (result) {
        console.log(result);
        res.json(JSON.stringify(result));
    } else {
        res.send(404);
    }
});

module.exports = router;
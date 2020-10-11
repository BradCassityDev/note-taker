const router = require('express').Router();
const db = require('../../db/db.json');
const {createNote, deleteNoteById} = require('../../lib/notes');

// Return Notes
router.get('/notes', (req, res) => {
    res.json(db);
});

// Post a new note
router.post('/notes', (req, res) => {
    const newNote = createNote(req.body, db);
    res.send(newNote);
});

// Delete Note
router.delete('/notes/:id', (req, res) => {
    const result = deleteNoteById(req.params.id, db);

    if (result) {
        res.send(result);
    } else {
        res.send(404);
    }
});

module.exports = router;
//required dependencies
const router = require('express').Router();
const { Comment } = require('../../models/Comment');

//route to find all comments
router.get('/', (req, res) => {
    Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

//route to find a specific comment
router.get('/:id', (req, res) => {
    Comment.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});
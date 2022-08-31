//required dependencies
const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

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
    Comment.findOne({
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

//route to post a comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }
});

//route to update a comment
router.put('/:id', withAuth, (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found matching this id' });
            return;
        }
        res.json(dbCommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to delete a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found matching this id' });
            return;
        }
        res.json(dbCommentData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;


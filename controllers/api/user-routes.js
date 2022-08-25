//required dependencies
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//route to get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to find a specific user
router.get('/:id', (req,res) => {
    router.findOne({
        attributes: { exclude: ['password'] },
        where: 
        {
            id: req.params.id
        },
        include: 
        [
            {
                model: Post,
                attributes:
                [
                    'id',
                    'title',
                    'content',
                    'created_at'
                ]
            },
            {
                model: Comment,
                attributes: 
                [
                    'id',
                    'comment_text',
                    'created_at'
                ],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            },
            {
                model: Post,
                attributes: ['title'],
            }
        ]
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found matching this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to create a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


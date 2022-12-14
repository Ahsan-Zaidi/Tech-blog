const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Keep up the great work!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Nice!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "AMAZING",
        user_id: 3,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
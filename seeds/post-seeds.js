const { Post } = require('../models');

const postData = [
    {
        title: "Best movie ever!",
        content: "I just watched interstellar. Its 10 out of 10!",
        user_id: 1
    },
    {
        title: "Top 3 Sneakers by Jordan brand",
        content: "I think Jordans best sneakers are the 1s, 4s, and 11s",
        user_id: 2
    },
    {
        title: "Best taco spot",
        content: "I was in LA I think i found the best taco spot in the states!",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
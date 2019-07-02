
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
        default: "all",
    },
    date: {
        type: String,
        required: false,
        default: new Date().toDateString()
    },
    image: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false,
    }
});

var model = mongoose.model( "posts", postSchema); // posts will be the name of the collection within the database
module.exports = model;



// var data = {
//     posts: [
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "shoes",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "clothing",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "comic books",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "keychains",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "cards",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "shoes",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "coins",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//         {
//             title: "first post",
//             author: "mr. author",
//             category: "shoes",
//             date: "today",
//             image: "https://i.imgur.com/HuwV4CW.jpg",
//             text: "laskjdf;alsjkf;askjdf akjsflas shoes"
//         },
//     ],
// };

// module.exports = data;
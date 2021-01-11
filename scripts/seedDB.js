const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed =
{
    authors: ["George R.R. Martin"],
    description: "Here is the first volume in George R. R. Martin's magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.",
    image: "https://www.google.com/books/edition/A_Game_of_Thrones/5NomkK4EV68C?hl=en&gbpv=1",
    link: "https://www.google.com/books/edition/A_Game_of_Thrones/5NomkK4EV68C?hl=en&gbpv=0",
    title: "Game of Thrones",
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
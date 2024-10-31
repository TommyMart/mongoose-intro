const { createPost } = require("./crud/PostCrud");
const { dbConnect } = require("./database");


async function seed () {

    // await dbConnect();
    await createPost("Example title", "Example content blah");




    console.log("Seeding is done, disconnecting from DB!");
    await dbConnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!")
    seed();
})

// seed();

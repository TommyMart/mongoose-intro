const { createPost, findManyPosts, findOnePost } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require("./database");


async function seed () {

    // await dbConnect();
    await createPost("Example title", "Example content blah");

    // search DB for a match using findOnePost function 
    let resultFindOne = await findOnePost({title: "Example title", content: "Example content blah"});

    console.log(resultFindOne.title);
    console.log(resultFindOne._id);
    console.log(resultFindOne.id);

    // If nothing returns an array still
    // let resultFindMany = await findManyPosts({title: "Nonexistent title"})
    // console.log(resultFindMany);

    console.log("Seeding is done, disconnecting from DB!");
    await dbDisconnect();
}

// Connect to DB, then seed, then disconnect from DB
dbConnect().then(() => {
    console.log("Connected to DB, seeding now!")
    seed();
})



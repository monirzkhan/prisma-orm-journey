import { prisma } from "./lib/prisma";

async function main() {
    // Create a new user with a post
    //   const user = await prisma.user.create({
    //     data: {
    //       name: "Alice",
    //       email: "alice@prisma.io",
    //       posts: {
    //         create: {
    //           title: "Hello World",
    //           content: "This is my first post!",
    //           published: true,
    //         },
    //       },
    //     },
    //     include: {
    //       posts: true,
    //     },
    //   });

    // const user = await prisma.user.create({
    //     data: {
    //         name: "Tamanna",
    //         email: "tamanna@gmail.com",
    //         posts: {
    //             create: {
    //                 title: "Hello World",
    //                 content: "This is my 2nd post!",
    //                 published: true,
    //             }
    //         }
    //     },
    // include: {
    //         posts: true,
    //     }
    // })
    // console.log("Created user:", user);

    const newPosts=await prisma.post.create({
        data:{
            title:"Argentina vs Autria",
            content:"Today is the match day of Argentina vs Austria in FIFA World Cup 2026",
            published: true,
            authorId:3
        }

    })
    console.log("Created Posts:", newPosts);

    // Fetch all users with their posts
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });
    console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
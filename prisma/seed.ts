import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Start seeding ...");

    for (const post of initalPosts){
        const newPost = await prisma.post.create({
            data:post
        });
        console.log(`Created post with id: ${newPost.id}`)
    }console.log("Seeding finished")
}


// const initalPosts: {
//     title: string;
//     id: string
//     user: { connectOrCreate: { create: { hashedPassword: string; email: string }; where: { email: string } } };
//     slug: string;
//     content: string
// }[] = [
//     {
//         title: "Post 1",
//         slug: "post-1",
//         id:"1",
//         content: "content of post 1",
//         user: {
//             connectOrCreate: {
//                 where: {
//                     email: "john@gmail.com",
//                 },
//                 create: {
//                     email: "john@gmail.com",
//                     hashedPassword: "ashaggsdasdgasgdgsajdghj",
//                 },
//
//             }
//         }
//     }
// ]
//
// async function main() {
//     console.log("Start seeding ...");
//     for (const post of initalPosts){
//         const newPost = await prisma.post.create({
//             data:post
//         });
//         console.log(`Created post with id: ${newPost.id}`)
//     }console.log("Seeding finished")
// }

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

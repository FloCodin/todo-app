// import prisma from "@/lib/db";
import AddTodo from "@/app/components/todos/AddTodo";
import {prisma} from "@/app/utils/prisma";
import {Prisma} from ".prisma/client";
import SortOrder = Prisma.SortOrder;

async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
        },
        orderBy: {
            createdAt: SortOrder.asc
        }
    })
    return data;

}

export default async function Home() {

    const data = await getData();
    return (
        <>
            <div className=" w-screen py-20 flex justify-center flex-col items-center">
                <span className="text-4xl font-extrabold uppercase">Todo App</span>
                <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
                    <span className="lowercase">w/</span>Server Actions
                </h1>


                <div className="flex justify-center flex-col items-center">
                    <AddTodo/>
                    {/* map todos*/}
                    <div className="flex flex-col items-center justify-center gap-5 mt-10 w-screen">
                        {data.map((todo, id) => (
                            <div id={todo.id}>{todo.title}</div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
//     const posts = await prisma.post.findMany({
//
//     });
//     // const user = await prisma.post.findUnique({
//     //     where: {
//     //         email: "john@gmail.com",
//     //     },
//     //     include:{
//     //         posts:true,
//     //         //dann beim {posts.map((post) => ( einfach ein {user.posts.map((post) => ( daraus machen und es klappt
//     //     }
//     // })
//
//     return (
//         <main className="">
//             <div className="flex h-screen justify-center bg-gray-600 ">
//                 <div className="justify-center pt-80">
//                     {/*<input type="text"*/}
//                     {/*       className="border-black border-2 px-2 py-1 rounded-md"*/}
//                     {/*       placeholder="write your to do here"*/}
//                     {/*       name="title"*/}
//                     {/*/>*/}
//                     {/*<ActionButtons/>*/}
//
//                     <form
//                         action={createPost}
//                         className="grid-cols-1 grid"
//                     >
//                         <input type="text"
//                                className="border-black border-2 px-2 py-1 rounded-md"
//                                placeholder="title"
//                                name="title"
//                         />
//                         <textarea
//                             name="content"
//                             rows={5}
//                             placeholder="content"
//                             className="border-black border-2 px-2 py-1 rounded-md"
//                         />
//                         <button
//                             type="submit"
//                             className="bg-blue-500 text-white px-2 py-2 rounded-md"
//                         > Create a post
//                         </button>
//                     </form>
//                 </div>
//
//
//                 <div className="justify-center pt-80 pl-4">
//                     <h1 className="font-semibold text-3xl text-white"> All Posts ({posts.length})</h1>
//                     <ul className="border-t border-b border-black/10 py-5 leading-8 text-white">
//                         {posts.map((post) => (
//                             <li key={post.id} className="flex items-center justify-between px-5" >
//                                 <div className="bg-white text-black w-80 max-w-screen-md flex rounded-md pl-1">
//                                     <Link href={`/posts/${post.slug}`} className="w-full"> {post.title} </Link>
//                                     <form action={editPost()} className=" flex hover:cursor-pointer">
//                                         <button type="submit" className="bg-lime-400 border-2 border-black border-solid rounded-lg p-1">
//                                             <Image src="images/pencil.svg" alt="image of a pencil" width="25"
//                                                    height="25"/>
//                                         </button>
//                                     </form>
//                                     <form action={deletePost()} className=" flex justify-end hover:cursor-pointer">
//                                         <button type="submit" className="bg-red-500 border-2 border-black border-solid rounded-lg p-1">
//                                             <Image src="images/delete.svg" alt="image of a pencil" width="25"
//                                                    height="25"/>
//                                         </button>
//                                     </form>
//
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     {/*<Link href="/todoApp" className={}></Link>*/}
//                 </div>
//             </div>
//         </main>
//     )
// }
//
// /*
// https://www.youtube.com/watch?v=QXxy8Uv1LnQ
//  */
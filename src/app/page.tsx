// import prisma from "@/lib/db";
import AddTodo from "@/app/components/todos/AddTodo";
import {prisma} from "@/app/utils/prisma";
import {Prisma} from ".prisma/client";
import SortOrder = Prisma.SortOrder;
import Todo from "@/app/components/todos/Todo";

async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
        },
        orderBy: {
            createdAt: SortOrder.desc
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
                            <div className="w-full" key={todo.id}>
                                <Todo todo={todo}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
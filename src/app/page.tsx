import AddTodo from "@/app/components/todos/AddTodo";
import {prisma} from "@/app/utils/prisma";
import Todo from "@/app/components/todos/Todo";
import {Prisma} from "../../prisma/generated/client";
import SortOrder = Prisma.SortOrder;
import {DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES} from "react";
import todo from "@/app/components/todos/Todo";
import {todoProps} from "@/app/types";

async function getData() {
    return await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
        },
        orderBy: {
            createdAt: SortOrder.desc
        }
    });

}

export default async function Home() {

    const data = await getData();
    return (
        <>

            <div className=" w-screen py-20 flex justify-center flex-col items-center">
                <span className="text-4xl font-bold uppercase">Crud Project</span>
                <h1 className="text-5xl font-extrabold  mb-5 text-center">
                    <span className="lowercase">by/</span> Florian R.
                </h1>


                <div className="flex justify-center flex-col items-center">
                    <AddTodo/>
                    {/* map todos*/}
                    <div className="flex flex-col items-center justify-center gap-5 mt-10 w-screen">
                        {data.map((todo:todoProps, id) => (
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
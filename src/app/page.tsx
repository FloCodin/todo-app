import AddTodo from "@/app/components/todos/AddTodo";
import {prisma} from "@/app/utils/prisma";
import Todo from "@/app/components/todos/Todo";
import { Prisma } from '@prisma/client'
import {todoProps} from "@/app/types";

async function getData() {
    return await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
            createdAt: true,
            priority: true,
        },
        orderBy: {
            createdAt: Prisma.SortOrder.desc,
        } as any
    });

}

export default async function Home() {

    const data = await getData();

    return (
        <>

                <h1>Crud Project by Florian R.</h1>


                <div>
                    <AddTodo/>
                    {/* map todos*/}
                    <ul>
                        {data.map((item) => {
                            const todo: todoProps = {
                                id: item.id,
                                createdAt: new Date(item.createdAt), // Assuming item.createdAt is a string
                                title: item.title,
                                priority: item.priority,
                                isCompleted: item.isCompleted,
                            };
                            return (
                                <li key={todo.id}>
                                    <Todo todo={todo} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
        </>
    )
}
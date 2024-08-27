import React from "react";
import {todoProps} from "@/app/types";
import ChangeTodo from "@/app/components/todos/ChangeTodo";
import EditTodo from "@/app/components/todos/EditTodo";
import DeleteTodo from "@/app/components/todos/DeleteTodo";
import PriorityTodo from "@/app/components/todos/PriorityTodo";


const Todo = ({todo}: { todo: todoProps }) => {
    const todoStyle = {
        textDecoration: todo.isCompleted ? 'line-through' : 'none',
        opacity: todo.isCompleted ? 0.5 : 1,
        // border: todo.priority ? 'border-amber-400 border-solid border-4' : 'none',
    }



    const formattedDate = new Date (todo.createdAt).toLocaleDateString('de-CH');

    return (
        <div style={todoStyle}
             className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl text-white border">
            <ChangeTodo todo={todo}/>
            <span className="text-center font-bold uppercase grow">{todo.title} </span>
            <span className={"font-semibold"}> <br/> was created at: {formattedDate}</span>
            <div className="flex items-center mx-2">
                <EditTodo todo={todo}/>
            </div>
            <div className="flex items-center "><DeleteTodo todo={todo}/>
            </div>

        </div>
    )
}
export default Todo
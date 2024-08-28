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

    }

    if (todo.createdAt == undefined) {
        return <h1>Error in ToDo. Please contact your administrator.</h1>
    }

    const formattedDate = todo.createdAt
        ? new Date(todo.createdAt).toLocaleDateString('de-CH')
        : 'Date conversion not working.'; // Fallback to an empty string or any default value you prefer

    return (
        <div style={{'display': 'flex'}}>
            <ChangeTodo todo={todo}/>
            {todo.title}
            created at: {formattedDate}
            <EditTodo todo={todo}/>
            <DeleteTodo todo={todo}/>
            <PriorityTodo todo={todo}/>
        </div>
    )
}
export default Todo
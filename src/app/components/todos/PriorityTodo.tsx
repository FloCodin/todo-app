"use client"
import React from 'react';
import {todoProps} from "@/app/types";
import {setPriorityOnToDoItem} from "@/actions";

interface TodoProps {
    id: string;
    title: string;
    priority: number;
}

const PriorityTodo = ({todo}: { todo: todoProps }) => {

    const changePriority = (e) => {
        const newPriority = parseInt(e.target.value, 10)
        setPriorityOnToDoItem(todo.id, newPriority);
    }

    return (<form>
        <label>Priority</label>
        <label>
            <input type="radio" name={`priorityHandler-${todo.id}`} value="1" onChange={changePriority}
                   checked={todo.priority == 1}/>
            1
        </label>
        <label>
            <input type="radio" name={`priorityHandler-${todo.id}`} value="2" onChange={changePriority}
                   checked={todo.priority == 2}/>
            2
        </label>
        <label>
            <input type="radio" name={`priorityHandler-${todo.id}`} value="3" onChange={changePriority}
                   checked={todo.priority == 3}/>
            3
        </label>
    </form>);
};

export default PriorityTodo;
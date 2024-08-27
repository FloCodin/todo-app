import React from 'react';
import Button from "@/app/components/button/Button";
import { GiFlyingFlag } from "react-icons/gi";
import { todoProps } from "@/app/types";
import {prisma} from "@/app/utils/prisma";
import * as actions from "@/actions"
import {changePriority} from "@/actions";

interface TodoProps {
    id: string;
    title: string;
    priority: number;
}

const PriorityTodo = ({ todo }: { todo: todoProps }) => {

    return (
        <form action={changePriority}>
            <input type="hidden" name="inputId" value={todo.id} />
            <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                text={<GiFlyingFlag />}
            >
            </Button>
        </form>
    );
};

export default PriorityTodo;
// <Button
//     text={<GiFlyingFlag />}
//     type="button"
//     actionButton
//     onClick={}
// >
// </Button>
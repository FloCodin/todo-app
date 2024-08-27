"use server"

import {prisma} from "@/app/utils/prisma";
import {revalidatePath} from "next/cache";

export async function createTodo(formData: FormData){
    const input = formData.get('input') as string;
    if (!input.trim()){
        return;
    }
    await prisma.todo.create({
        data: {
            title: input,
        },
    });
    revalidatePath("/")
}

export async function changeStatus (formData: FormData){
    const inputId= formData.get("inputId") as string
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        },
    })
    const updateStatus = !todo?.isCompleted;
    await prisma.todo.update({
        where: {
            id: inputId
        },
        data:{
            isCompleted: updateStatus
        }
    })

    revalidatePath("/")
}
export async function editTodo (formdata: FormData){
    const newTitle = formdata.get("newTitle") as string;
    const inputId = formdata.get("inputId") as string;

    await prisma.todo.update({
        where: {
            id: inputId
        },
        data:{
            title: newTitle
        }
    })
    revalidatePath("/")
}
export async function deleteTodo (formdata: FormData){
    const inputId = formdata.get("inputId") as string;
    await prisma.todo.delete({
        where:{
            id: inputId
        }
    })
    revalidatePath("/")
}

export async function changePriority (formData: FormData) {
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        },
    });

    if (!todo) {
        return; // Optional: Fehlerbehandlung, falls das Todo nicht existiert
    }

    // Zyklisch die Priorität ändern: von 1 -> 2 -> 3 -> 1
    const newPriority = todo.priority < 3 ? todo.priority + 1 : 1;

    await prisma.todo.update({
        where: {
            id: inputId
        },
        data: {
            priority: newPriority
        }
    });

    revalidatePath("/");
}
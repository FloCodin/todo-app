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

export async function createPost(formData: FormData){
    await prisma.post.create({
        data:{
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            content: formData.get("content") as string,

        }
    })
    revalidatePath("/posts")
}
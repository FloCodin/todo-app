"use client"
import {formProps} from "@/app/types";
import {useRef} from "react";

const Form = ({children, action, className, onSubmit}: formProps) => {
    const ref = useRef<HTMLFormElement>()

    const formAction = async (formData) => {
        if (action) {
            await action(formData);
        }
        ref.current?.reset()
    }

    return (
        <form action={formAction}
              onSubmit={onSubmit}
              ref={ref}
        >
            {children}
        </form>
    )
}
/*
* Signatur luut kenny, vo de action
* https://www.youtube.com/watch?v=9OoKXOq7ENo
* */
export default Form











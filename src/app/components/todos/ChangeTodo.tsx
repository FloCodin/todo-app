import Button from "@/app/components/button/Button";
import Input from "@/app/components/input/Input";
import Form from "@/app/components/form/Form";
import *as action from "@/actions"
import {todoProps} from "@/app/types";
import {FaCheck} from "react-icons/fa";

const ChangeTodo = ({todo}: { todo: todoProps }) => {
    return (
        <Form action={action.changeStatus}>
            <Input name="inputId" value={todo.id} type="hidden"></Input>
            <Button
                text={<FaCheck/>}
                type="submit"
                actionButton
                bgColor={todo.isCompleted ? 'bg-green-400' : 'bg-blue-500'}
            >
            </Button>
        </Form>
    )
}
export default ChangeTodo
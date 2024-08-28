import {todoProps} from "@/app/types";
import Form from "@/app/components/form/Form";
import * as actions from "@/actions";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import {FaTrash} from "react-icons/fa";

const DeleteTodo = ({todo}: { todo: todoProps }) => {


    return(
        <Form action={actions.deleteTodo}>
            <Input name="inputId" type="hidden" value={todo.id}></Input>
            <Button actionButton type="submit" bgColor="bg-red-400" text={<FaTrash/>}></Button>
        </Form>
    )
}

export default DeleteTodo



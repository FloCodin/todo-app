import Form from "@/app/components/form/Form";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import * as actions from "@/actions";


const AddTodo = () => {
return (
  <div >
      <Form action={actions.createTodo}>
          <div className="flex gap-2">
              <Input name="input" type="text" placeholder="Add Todo Here..."/>
              <Button type="submit" text="Add" bgColor="bg-blue-600"/>
          </div>
      </Form>
  </div>
);
}
export default AddTodo
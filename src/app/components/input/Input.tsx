import {inputProps} from "@/app/types";

const Input = ({name, type, placeholder, value}: inputProps) => {
    return(
        <div>
            <input name={name} type={type} placeholder={placeholder} value={value}
            />
        </div>
    )
}

export default Input
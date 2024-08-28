import {buttonProps} from "@/app/types";
import clsx from "clsx";

const Button = ({
                    type,
                    text,
                    onClick,
                    actionButton,
                    bgColor,
                    ...props
}:buttonProps) => {
    return(
        <div>
            <button
                onClick={onClick}
                type={type}
            >
                {text}</button>
        </div>
    )
}
export default Button
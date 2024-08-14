"use client"

type ActionButtonsProps = {};

export default function ActionButtons(props: ActionButtonsProps) {
    return (
        <>
            <button className="bg-lime-400 border-2 border-black border-solid rounded-lg p-1"
                    onClick={() => console.log("click")}
            >
                add
            </button>
            <button className="bg-red-500 border-2 border-black border-solid rounded-lg p-1">
                delete
            </button>
        </>
    );
}
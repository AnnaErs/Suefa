import { memo } from "react";

import { ButtonType } from "./types";

const Button: ButtonType = ({ children,onclick }) => {
    return (
        <div className="flex">
            <button onClick={onclick} className="bg-blue text-white rounded-[20px] text-xl font-normal transition duration-500 ease-in-out shadow-2xl shadow-blue bg-gradient-to-r from-blue to-blue hover:from-dark-green hover:to-light-blue active px-8 py-4">
                {children}
            </button>
        </div>
    );
};

export default memo(Button);

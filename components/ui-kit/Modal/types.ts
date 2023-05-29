import { FC } from "react";

type ModalPropsType = {
    header: string;
    message: string;
    submitButtonText: string;
};

export type ModalType = FC<ModalPropsType>;

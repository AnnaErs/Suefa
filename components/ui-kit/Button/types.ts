import { FC, PropsWithChildren } from "react";

type ButtonPropsType = {
    text: string;
    onclick: (e: any) => void;
};

export type ButtonType = FC<ButtonPropsType>;

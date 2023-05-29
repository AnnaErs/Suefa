import { FC, PropsWithChildren } from "react";

type ButtonPropsType = PropsWithChildren<{
    onclick: (e: any) => void;
}>;

export type ButtonType = FC<ButtonPropsType>;

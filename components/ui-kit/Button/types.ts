import {FC, PropsWithChildren} from "react";

type ButtonPropsType = PropsWithChildren<{
    onclick:()=>void
}>;

export type ButtonType = FC<ButtonPropsType>

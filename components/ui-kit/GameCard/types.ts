import { FC } from "react";

type GameCardPropsType = {
    userName: string;
    userAmount: string;
    connectionCode: string;
};

export type GameCardType = FC<GameCardPropsType>;

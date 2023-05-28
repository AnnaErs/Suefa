import { FC } from "react";

type GameCardPropsType = {
    userName: string;
    userAmount: string;
    connectionCode: string;
    onClickBackwards: (e:any) => void;
    onClickForwards: (e:any) => void;
};

export type GameCardType = FC<GameCardPropsType>;

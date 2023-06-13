import { FC } from "react";

type GamePreviewPropsType = {
    title: string;
    description: string;
    amountOfUsers: string;
    picture: string;
};

export type GamePreviewType = FC<GamePreviewPropsType>;

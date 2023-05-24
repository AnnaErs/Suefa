import { FC } from "react";

type AccordeonPropsType = {
    answer: string;
    question: string;
};

export type AccordeonType = FC<AccordeonPropsType>;

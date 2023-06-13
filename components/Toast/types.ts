import { FC } from "react";

type PhonePlusConsolePropsType = {
    toastText: string;
    toastSubtitle?: string;
    secParagraph?: string;
    thirdParagraph?: string;
    forthParagraph?: string;
};

export type PhonePlusConsoleType = FC<PhonePlusConsolePropsType>;

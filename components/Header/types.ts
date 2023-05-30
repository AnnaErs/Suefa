import { FC } from "react";

type HeaderPropsType = {};
export type HeaderType = FC<HeaderPropsType>;

type Link = {
    name: string;
    href: string;
    hash?: string;
    target?: string;
};
export type Links = Array<Link>;

export type HeaderLinks = {
    left?: Links;
    right?: Links;
};

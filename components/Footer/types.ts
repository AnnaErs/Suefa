import { FC } from "react";

type FooterPropsType = {};
export type FooterType = FC<FooterPropsType>;

type Link = {
    name: string;
    href: string;
    hash?: string;
    target?: string;
};
type Links = Array<Link>;

export type FooterLinks = {
    left?: Links;
    right?: Links;
};

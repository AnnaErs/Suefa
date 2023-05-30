"use client";
import { memo } from "react";

import { FooterType } from "./types";
import { LINKS } from "./consts";

const Footer: FooterType = () => {
    return (
        <footer className=" w-full ease-in-out duration-200 bg-black text-white">
            <div className="flex justify-between px-10">
                <div className="text-lg flex cursor-pointer">
                    {LINKS.left &&
                        LINKS.left?.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="mr-12 py-2 block"
                                target={link.target}
                            >
                                {link.name}
                            </a>
                        ))}
                </div>
                <div className="flex cursor-pointer">
                    {LINKS.right &&
                        LINKS.right?.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="ml-12 py-2 block"
                                target={link.target}
                            >
                                {link.name}
                            </a>
                        ))}
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);

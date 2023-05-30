"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/20/solid";

import { HeaderType } from "./types";
import { LINKS } from "./consts";

const Header: HeaderType = () => {
    return (
        <header className="w-full h-[x125p] sticky top-0 ease-in-out duration-200 z-10 shadow-blue bg-dark-gray">
            <div className="flex items-center justify-between px-8 py-4 text-[28px] text-white">
                <div className="flex flex-row gap-5">
                    <a href="#">
                        <Image
                            src="https://storage.yandexcloud.net/suefa-backet/Suefa%20logo.png"
                            alt="logo"
                            width={210}
                            height={80}
                        ></Image>
                    </a>
                </div>
                <div>
                    <ul className="flex flex-row gap-24">
                        {LINKS.map((link) => (
                            <li key={link.hash}>
                                <a href={link.href} key={link.hash}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center children:ml-12">
                    <UserIcon className=" h-[60px] w-[60px]" />
                </div>
            </div>
        </header>
    );
};

export default memo(Header);

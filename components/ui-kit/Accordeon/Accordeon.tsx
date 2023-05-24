"use client";
import { memo } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { AccordeonType } from "./types";

const Accordeon: AccordeonType = ({ answer, question }) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-[30px] bg-white px-10 py-5 text-left text-4xl font-medium text-black">
                        <div>{question}</div>
                        <ChevronUpIcon
                            className={`${
                                open ? "rotate-180 transform" : ""
                            } h-16 w-16 text-purple-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex w-full flex-col gap-9 px-4 pt-4 pb-2 text-4xl text-gray-500">
                        <p>{question}</p>
                        <p> Ответ: {answer}</p>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default memo(Accordeon);

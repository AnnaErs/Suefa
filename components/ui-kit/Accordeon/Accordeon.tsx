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
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-[30px] bg-white px-10 text-left text-2xl font-medium text-light-gray">
                        <div>{question}</div>
                        <ChevronUpIcon
                            className={`${
                                open ? "rotate-180 transform" : ""
                            } h-16 w-16 text-purple-500 text-black`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex w-full flex-col gap-3 px-4 pt-4 pb-2 text-lg text-white border border-light-gray rounded-2xl">
                        <p>{question}</p>
                        <p> Ответ: {answer}</p>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default memo(Accordeon);

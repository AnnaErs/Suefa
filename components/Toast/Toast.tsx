import { memo } from "react";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

import { CheckIcon } from "@heroicons/react/20/solid";

import { PhonePlusConsoleType as ToastType } from "./types";

const Toast: ToastType = ({
    toastText,
    toastSubtitle,
    secParagraph,
    thirdParagraph,
    forthParagraph,
}) => {
    return (
        <div
            id="toast-default"
            className="flex items-center w-full max-w-2xl p-4 text-white bg-dark-gray rounded-lg shadow dark:text-gray-400 bg-gray-800 opacity-90"
            role="alert"
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                <svg
                    aria-hidden="true"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <span className="sr-only">Fire icon</span>
            </div>
            <div className="flex flex-col text-center">
                <div className="ml-3 text-xl font-normal">{toastText}</div>
                {toastSubtitle && (
                    <div className="flex flex-col ml-3 text-lg font-normal items-center">
                        {toastSubtitle}
                        <ArrowDownIcon className="max-w-8 max-h-8" />
                    </div>
                )}
                {secParagraph && (
                    <div className="relative ml-3 text-lg font-normal mt-5">
                        <CheckIcon className="absolute w-8 h-8 text-purple" />
                        <div className="flex">{secParagraph}</div>
                    </div>
                )}
                {thirdParagraph && (
                    <div className="relative ml-3 text-lg font-normal">
                        <CheckIcon className="absolute w-8 h-8 text-purple" />
                        <div className="flex">{thirdParagraph}</div>
                    </div>
                )}
                {forthParagraph && (
                    <div className=" relative ml-3 text-lg font-normal">
                        <CheckIcon className="absolute h-8 w-8 text-purple" />
                        <div className="flex mt-1 justify-center">
                            {forthParagraph}
                        </div>
                    </div>
                )}
            </div>

            <span>
                <svg
                    aria-hidden="true"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </span>
        </div>
    );
};

export default memo(Toast);

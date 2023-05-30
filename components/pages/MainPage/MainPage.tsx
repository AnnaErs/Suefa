"use client";
import { memo } from "react";
import { useRouter } from "next/navigation";

import Button from "@components/ui-kit/Button/Button";

import { MainPageType } from "./types";

const MainPage: MainPageType = () => {
    const router = useRouter();
    const handleClick = (e: any) => {
        e.preventDefault();
        router.push("/game-room");
    };

    return (
        <div className="h-screen w-full bg-[url(https://storage.yandexcloud.net/suefa-backet/Backgroung-svg.svg)] bg-cover bg-center p-24 bg-fixed snap-start">
            <div className="min-h-screen w-full flex flex-col justify-center items-center">
                <Button onclick={handleClick}>Играть прямо сейчас</Button>
                <img
                    className="object-none object-bottom max-w-full h-[550px] bg-no-repeat bg-cover bg-center -m-5 -p-5"
                    src="https://storage.yandexcloud.net/suefa-backet/Suefa-mainpage.png"
                />
            </div>
        </div>
    );
};
export default memo(MainPage);

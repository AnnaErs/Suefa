"use client";
import { memo } from "react";
import { useRouter } from "next/navigation";

import Button from "@components/ui-kit/Button/Button";
import Toast from "@components/Toast/Toast";

import { MainPageType } from "./types";

const MainPage: MainPageType = () => {
    const router = useRouter();
    const handleClick = (e: any) => {
        e.preventDefault();
        router.push("/game-room");
    };

    return (
        <div className="h-screen w-full bg-[url(https://storage.yandexcloud.net/suefa-backet/Backgroung-svg.svg)] bg-cover bg-center bg-fixed snap-start">
            <div className="min-h-screen w-full flex flex-col justify-center items-center">
                <div className="mb-10">
                    <Toast
                        toastText="Бери свой телефон, зови друзей и начинай играть в экзклюзивные игры прямо сейчас!"
                        toastSubtitle="Скорей жми на кнопку!"
                    />
                </div>
                <Button onclick={handleClick}>Играть прямо сейчас</Button>
                <img
                    className="object-none object-bottom max-w-full h-[550px] bg-no-repeat bg-cover bg-center -m-10 -p-10"
                    src="https://storage.yandexcloud.net/suefa-backet/Suefa-mainpage.png"
                />
            </div>
        </div>
    );
};
export default memo(MainPage);

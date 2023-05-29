"use client";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

import GameCard from "@components/ui-kit/GameCard/GameCard";
import Modal from "@components/ui-kit/Modal/Modal";

import { GameRoomType } from "./types";

const GameRoom: GameRoomType = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [code, setCode] = useState<number | undefined>();
    const router = useRouter();
    const handleClickBackwards = (e: any) => {
        e.preventDefault();
        router.push("/");
    };

    useEffect(() => {
        const socket = io("localhost:8080/mobile");
        const min = 100000;
        const max = 999999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setCode(randomNumber);
        socket.emit("codeMessage", randomNumber.toString());
        socket.on("passwordRight", () => {
            router.push("/game-menu");
        });
    }, [router]);
    return (
        <>
            <div className="h-screen w-full bg-[url(https://storage.yandexcloud.net/suefa-backet/Backgroung-svg.svg)] bg-cover bg-center p-24 bg-fixed overflow-hidden contrast-50 absolute top-0 -z-10"></div>
            <div className="flex min-h-screen justify-center items-center">
                <GameCard
                    userName="Анна Ершова"
                    userAmount="1"
                    connectionCode={code?.toString() || ""}
                    onClickBackwards={handleClickBackwards}
                    onClickForwards={setIsOpen}
                />
                {isOpen ? (
                    <Modal
                        header="Начните играть прямо сейчас!"
                        message="Для выбора игры ввыедите код на своём устройстве, это автоматически перенесёт вас на страницу с выбором."
                        submitButtonText="Ура! Сейчас подключусь!"
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default memo(GameRoom);

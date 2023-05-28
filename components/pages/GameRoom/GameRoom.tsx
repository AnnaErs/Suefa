"use client";
import {memo, useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import { io } from "socket.io-client";

import GameCard from "@components/ui-kit/GameCard/GameCard";

import { GameRoomType } from "./types";
import mainPage from "@/pages/MainPage";

const GameRoom: GameRoomType = () => {
    const[code,setCode]=useState<number | undefined>();
    const router = useRouter();
    const handleClick = (e) => {
        console.log('круо');
        e.preventDefault();
        router.push('/');

    };
    useEffect(()=>{
        const socket = io('localhost:8080/mobile');
        const min = 100000;
        const max = 999999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setCode(randomNumber);
        socket.emit('codeMessage',randomNumber.toString());
        socket.on('passwordRight', ()=>{
            router.push('/gameMenu');
        });
    },[router])
    return (
        <>
            <div className="h-screen w-full bg-[url(https://storage.yandexcloud.net/suefa-backet/Backgroung-svg.svg)] bg-cover bg-center p-24 bg-fixed overflow-hidden contrast-50 absolute top-0 -z-10"></div>
            <div className="flex min-h-screen justify-center items-center">
                <GameCard
                    userName="Анна Ершова"
                    userAmount="1"
                    connectionCode = {code}
                    onClickBackwards={handleClick}
                    onClickForwards={handleClick}
                />
            </div>
        </>
    );
};

export default memo(GameRoom);

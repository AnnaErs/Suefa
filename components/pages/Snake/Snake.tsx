"use client";
import {memo, useEffect, useRef, useState} from "react";
import { useRouter } from 'next/navigation';
import { io } from "socket.io-client";
import {createGame} from "./game"

let dir;

const Snake = () => {
    const ref =useRef();
    const [selectedButton,setSelectingButton] = useState();
    const router = useRouter();
    const handleClick = (e) => {
        console.log('круо');
        e.preventDefault();
        router.push('/');

    };
    useEffect(()=>{
        const ctx = ref.current.getContext("2d");
        createGame(ctx);
        console.log(ctx,ref);

    },[router])

    return (
        <canvas ref={ref} width="608px" height="608px">

        </canvas>
    );
};

export default memo(Snake);

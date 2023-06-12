"use client";
import {memo, useEffect, useRef, useState} from "react";
import { useRouter } from 'next/navigation';

import {createGame} from "./game"


const PingPong = () => {
    const ref =useRef();
    const [selectedButton,setSelectingButton] = useState();
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push('/');

    };
    useEffect(()=>{
        setTimeout(()=>{
            const ctx = ref.current.getContext("2d");
            createGame(ctx);

        })

    },[ref])

    return (
        <canvas ref={ref} width="750px" height="585px"/>
    );
};

export default memo(PingPong);

"use client";
import {memo, useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import { io } from "socket.io-client";

function moveToRightBlock() {
    let currentBlock = document.querySelector('.current-block');
    let blockToTheRight = currentBlock.nextElementSibling;
    if (blockToTheRight && blockToTheRight.nodeType === 1) {
        removeClass(currentBlock, 'current-block');
        console.log('удалил класс');
        addClass(blockToTheRight, 'current-block');
    }
}
function moveToLeftBlock() {
    const currentBlock = document.querySelector('.current-block');
    const blockToTheLeft = currentBlock.previousElementSibling;
    if (blockToTheLeft && blockToTheLeft.nodeType === 1) {
        removeClass(currentBlock, 'current-block');
        addClass(blockToTheLeft, 'current-block');
    }
}
function moveToDownBlock() {
    const currentBlock = document.querySelector('.current-block');
    const blockBelow = currentBlock.nextElementSibling;
    if (blockBelow && blockBelow.nodeType === 1) {
        removeClass(currentBlock, 'current-block');
        addClass(blockBelow, 'current-block');
    }
}
function moveToUpBlock() {
    const currentBlock = document.querySelector('.current-block');
    const blockAbove = currentBlock.previousElementSibling
        || currentBlock.previousSibling.previousElementSibling;
    if (blockAbove && blockAbove.nodeType === 1) {
        removeClass(currentBlock, 'current-block');
        addClass(blockAbove, 'current-block');
    }
}
function clickOnCurrentBlock() {
    const currentBlock = document.querySelector('.current-block');
    currentBlock.click();
}



const GameMenu = () => {
    const [selectedButton,setSelectingButton] = useState();
    const router = useRouter();
    const handleClick = (e) => {
        console.log('круо');
        e.preventDefault();
        router.push('/');

    };
    useEffect(()=>{
        const socket = io('localhost:8080/mobile');
        socket.on('rightButtonClickOnMobile', () => {
            moveToRightBlock();
        });
        socket.on('leftButtonClickOnMobile', () => {
            moveToLeftBlock();
        });
        socket.on('downButtonClickOnMobile', () => {
            moveToDownBlock();
        });
        socket.on('upButtonClickOnMobile', () => {
            moveToUpBlock();
        });
        socket.on('enterButtonClickOnMobile', () => {
            clickOnCurrentBlock();
        });

    },[router])

    return (
        <>
            <button className={`${selectedButton===1 ? 'current-block':''}`}> Змейка </button>
            <button className={`${selectedButton===2 ? 'current-block':''}`}> не Змейка</button>
            <button className={`${selectedButton===3 ? 'current-block':''}`}> не Змейка</button>
        </>
    );
};

export default memo(GameMenu);

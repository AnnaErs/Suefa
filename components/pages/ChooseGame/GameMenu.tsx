"use client";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { UserIcon } from "@heroicons/react/20/solid";

import Button from "@components/ui-kit/Button/Button";
import Modal from "@components/ui-kit/Modal/Modal";

import { GameMenuType } from "./types";

function clickOnCurrentBlock() {
    const currentBlock = document.querySelector(
        ".current-block"
    ) as HTMLElement;
    currentBlock && currentBlock.click();
}

const GameMenu: GameMenuType = () => {
    let [selectedButton, setSelectingButton] = useState(1);
    const router = useRouter();
    const handleClick = (e: any) => {
        e.preventDefault();
        router.push("/games/snake");
    };
    useEffect(() => {
        function moveToRightBlock() {
            setSelectingButton((selectedButton += 1));
        }
        function moveToLeftBlock() {
            setSelectingButton((selectedButton -= 1));
        }
        function moveToDownBlock() {
            setSelectingButton((selectedButton += 1));
        }
        function moveToUpBlock() {
            setSelectingButton((selectedButton -= 1));
        }
        const socket = io("localhost:8080/mobile");
        socket.on("rightButtonClickOnMobile", () => {
            moveToRightBlock();
        });
        socket.on("leftButtonClickOnMobile", () => {
            moveToLeftBlock();
        });
        socket.on("downButtonClickOnMobile", () => {
            moveToDownBlock();
        });
        socket.on("upButtonClickOnMobile", () => {
            moveToUpBlock();
        });
        socket.on("enterButtonClickOnMobile", () => {
            clickOnCurrentBlock();
        });
    }, [router]);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="w-full min-h-screen bg-dark-gray ">
                <div className="flex flex-row text-base text-white px-6 py-6 gap-14">
                    <p className="flex flex-row items-center">
                        Мин - 1 <UserIcon className="h-3 w-3" />
                    </p>
                    <p className="flex flex-row items-center">
                        Макс - 1 <UserIcon className="h-3 w-3" />
                    </p>
                    <p>Жанры: аркада</p>
                </div>
                <div className="flex flex-col w-full h-[570px] bg-[url(https://storage.yandexcloud.net/suefa-backet/snake-image.png)] bg-cover p-6 gap-32">
                    <div className=" w-[650px] bg-dark-gray opacity-60 rounded-[20px]">
                        <div className="flex flex-col text-white opacity-100 gap-5 px-6 py-8">
                            <div className="flex flex-row items-center">
                                <h2 className="text-5xl mr-6">Snake</h2>
                                <p className="flex flex-row text-base">1</p>
                                <UserIcon className="h-4 w-4" />
                            </div>{" "}
                            <p className=" text-2xl">
                                Snake — компьютерная игра, возникшая в середине
                                или в конце 1970-х. Игрок управляет длинным,
                                тонким существом, напоминающим змею, которое
                                ползает по плоскости, собирая еду, избегая
                                столкновения с собственным хвостом и краями
                                игрового поля.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end items-end">
                        <Button onclick={setIsOpen}>
                            Начать играть сейчас
                        </Button>
                    </div>
                    {isOpen ? (
                        <Modal
                            header="Начать играть сейчас!"
                            message="Чтобы начать, выберите игру на устройстве."
                            submitButtonText="Сейчас выберу!"
                        />
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex flex-row px-28 py-14 gap-10">
                    <button
                        className={`${
                            selectedButton === 1 ? "current-block" : ""
                        } w-[250px] h-[150px] text-sm text-white`}
                        onClick={handleClick}
                    >
                        <div
                            className={`${
                                selectedButton === 1
                                    ? "border-4 border-purple"
                                    : ""
                            }"w-[250px] h-[110px] bg-[url(https://storage.yandexcloud.net/suefa-backet/snake-image.png)] bg-cover rounded-[20px]`}
                        />
                        <div className="flex flex-row justify-between items-center px-1">
                            Змейка
                            <div className="flex flex-row items-center">
                                <p className="text-base">1</p>
                                <UserIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </button>
                    <button
                        className={`${
                            selectedButton === 2 ? "current-block" : ""
                        } w-[250px] h-[150px] text-sm text-white`}
                    >
                        <div
                            className={`${
                                selectedButton === 2
                                    ? "border-4 border-purple"
                                    : ""
                            }w-[250px] h-[110px] bg-[url(https://storage.yandexcloud.net/suefa-backet/tetris.jpg)] bg-cover rounded-[20px]`}
                        />
                        <div className="flex flex-row justify-between items-center px-1">
                            Тетрис
                            <div className="flex flex-row items-center">
                                <p className="text-base">1</p>
                                <UserIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </button>
                    <button
                        className={`${
                            selectedButton === 3 ? "current-block" : ""
                        } w-[250px] h-[150px] text-sm text-white`}
                    >
                        <div
                            className={`${
                                selectedButton === 3
                                    ? "border-4 border-purple"
                                    : ""
                            }w-[250px] h-[110px] bg-[url(https://storage.yandexcloud.net/suefa-backet/pacman-game-card.png)] bg-cover rounded-[20px]`}
                        />
                        <div className="flex flex-row justify-between items-center px-1">
                            Packman
                            <div className="flex flex-row items-center">
                                <p className="text-base">1</p>
                                <UserIcon className="h-4 w-4" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default memo(GameMenu);